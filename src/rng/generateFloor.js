import { ROOMTYPE, WALLTYPE } from "../constants/roomEnums"
import { levelOne } from "../constants/mock"
import clonedeep from "lodash.clonedeep"

const generateFloor = () => {
  console.log(findShortestPath(levelOne));
}
//So many options...
//https://medium.freecodecamp.org/how-to-make-your-own-procedural-dungeon-map-generator-using-the-random-walk-algorithm-e0085c8aa9a
//https://medium.com/@victorcatalintorac/dungeon-with-rooms-algorithm-for-javascript-ultimate-begginer-guide-ec1489e90314 
//http://www.roguebasin.com/index.php?title=Basic_BSP_Dungeon_generation 
//https://codepen.io/jakeland/pen/Gjpwpm 
//https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/ 
//http://ashblue.github.io/javascript-pathfinding/
//https://github.com/qiao/PathFinding.js/blob/master/src/finders/AStarFinder.js 
//http://gregtrowbridge.com/a-basic-pathfinding-algorithm/ SEEMS SIMPLE, CHECK THIS FIRST?

const findShortestPath = (floor) => {
  console.time("findShortestPath")
  // Creating a recursive copy of floor matrix to avoid mutation
  let grid = clonedeep(floor)

  // Get location of entrance
  let distanceFromTop,
      distanceFromLeft;
  for (let x = 0; x < grid.length; x++){
    for (let y = 0; y < grid[x].length; y++){
      grid[x][y].visited = false;
      if (grid[x][y].type === ROOMTYPE.ENTRANCE){
        console.log(`Entrance is located at grid[${x}][${y}]`)
        distanceFromTop = x
        distanceFromLeft = y
        grid[x][y].visited = true;
      }
    }
  }

  // Each "location" will store its coordinates
  // and the shortest path required to arrive there
  let location = {
    distanceFromTop: distanceFromTop,
    distanceFromLeft: distanceFromLeft,
    path: [],
    status: 'Start'
  };

  // Initialize the queue with the start location already inside
  let queue = [location];

  // Loop through the grid searching for the goal
  while (queue.length > 0) {
    // Take the first location off the queue
    let currentLocation = queue.shift();
    let directions = ["N", "S", "E", "W"]

    // Search in all available directions
    for (let dir in directions){
      let newLocation = exploreInDirection(currentLocation, directions[dir], grid)
      if(newLocation.status === "Exit"){
        console.timeEnd("findShortestPath")
        return newLocation.path
      } else if (newLocation.status === "Valid"){
        queue.push(newLocation)
      }
    }    
  }
  // No valid path found
  return false;
};

// This function will check a location's status
// (a location is "valid" if it is on the grid, is not an "obstacle",
// and has not yet been visited by our algorithm)
// Returns "Valid", "Invalid", "Blocked", or "Goal"
const locationStatus = (location, grid) => {
  let gridHeight = grid.length;
  let gridWidth = grid[0].length;
  let dft = location.distanceFromTop;
  let dfl = location.distanceFromLeft;
  console.log(`Checking status on grid[${dft}][${dfl}]`)

  if (location.distanceFromLeft < 0 ||
      location.distanceFromLeft >= gridWidth ||
      location.distanceFromTop < 0 ||
      location.distanceFromTop >= gridHeight) {
    console.log(`Location of grid[${dft}][${dfl}] is invalid`)
    return 'Invalid';

  } else if (grid[dft][dfl].type === ROOMTYPE.EXIT) {
    console.log(`Location of grid[${dft}][${dfl}] is exit`)
    return 'Exit';

  } else if (grid[dft][dfl].type === ROOMTYPE.VOID || grid[dft][dfl].visited) {
    console.log(`Location of grid[${dft}][${dfl}] is blocked`)
    return 'Blocked';

  } else {
    console.log(`Location of grid[${dft}][${dfl}] is valid`)
    return 'Valid';
  }
};


// Explores the grid from the given location in the given
// direction
const exploreInDirection = (currentLocation, direction, grid) => {
  let newPath = currentLocation.path.slice();
  newPath.push(direction);

  let dft = currentLocation.distanceFromTop;
  let dfl = currentLocation.distanceFromLeft;
  let locationwall = grid[dft][dfl].walls[direction]

  let newLocation = {
    distanceFromTop: dft,
    distanceFromLeft: dfl,
    path: newPath,
    status: 'Unknown'
  };

  console.log(`Wall in direction ${direction} is ${locationwall}`)
  // Set location status to "Blocked" if direction is Wall or Secret
  if(locationwall === WALLTYPE.WALL || locationwall === WALLTYPE.SECRET){
    newLocation.status = "Blocked"
    return newLocation
  }

  if (direction === 'N') {
    newLocation.distanceFromTop -= 1;
  } else if (direction === 'E') {
    newLocation.distanceFromLeft += 1;
  } else if (direction === 'S') {
    newLocation.distanceFromTop += 1;
  } else if (direction === 'W') {
    newLocation.distanceFromLeft -= 1;
  }
  console.log(`newLocation is [${newLocation.distanceFromTop}][${newLocation.distanceFromLeft}]`)

  newLocation.status = locationStatus(newLocation, grid);

  // If this new location is valid, mark it as 'Visited'
  if (newLocation.status === 'Valid') {
    grid[newLocation.distanceFromTop][newLocation.distanceFromLeft].visited = true;
  }

  return newLocation;
};

// Find shortest path from Entrance to Exit in levelOne

export default generateFloor
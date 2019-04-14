import React, { Component } from 'react';
import './App.css';
import Map from "./pages/Map"

import { connect } from "react-redux"
import { getMonsters } from "./redux/actions/firestoreActions"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getMonsters())
  }

  render() {
    const { error, loading, monsters } = this.props

    let content = <Map monsters={monsters}/>
    if(error){
      content = <div>Error! {error.message}</div>
    }
    if(loading){
      content = <div>Loading...</div>
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  monsters: state.firestore.monsters,
  loading: state.firestore.loading,
  error: state.firestore.error
})

export default connect(mapStateToProps)(App);

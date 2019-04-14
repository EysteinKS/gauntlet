import { firestore } from "./firebase";

//MAIN API
export const getFirestoreDoc = async refString => {
  let thisDoc = await firestore
    .doc(refString)
    .get()
    .then(async docRef => {
      return await docRef.data();
    })
    .catch(error => { throw new Error(error) }
    );
  await console.log("Got ", refString);
  return thisDoc;
};

export const getFirestoreCollection = async (refString, where) => {
  let thisCol = await firestore
    .collection(refString)
    .where(where)
    .get()
    .then(async colRef => {
      let ret = {};
      await colRef.forEach(docRef => {
        ret[docRef.id] = docRef.data();
      });
      return ret;
    })
    .catch(err => console.log(`Error while importing ${refString}:`, err));
  return thisCol;
};

export const addDocumentWithRandomID = (refString, getData) => {
  let documentRef = "";

  firestore
    .collection(refString)
    .add(getData)
    .then(docRef => {
      documentRef = docRef.id;
      return documentRef;
    })
    .catch(error => console.log("Error adding document with Random ID", error));
};

export const setDataToFirestore = async (refString, setVariable) => {
  firestore
    .doc(refString)
    .set(setVariable)
    .then(ret => {
      console.log(`Data set to ${refString}`);
      return ret;
    })
    .catch(error => console.log("Error setting data in Firestore", error));
};

export const mergeDataToFirestore = (refString, updateVariable) => {
  firestore
    .doc(refString)
    .set(updateVariable, {merge: true})
    .then(() => {
      console.log(`${updateVariable} updated to ${refString}`);
    })
    .catch(error => console.log("Error updating data in Firestore", error));
};

export const updateDataToFirestore = ( refString, updateVariable ) => {
  firestore
    .doc(refString)
    .update(updateVariable)
    .then(() => {
      console.log(`${updateVariable} updated to ${refString}`);
    })
    .catch(error => console.log("Error updating data in Firestore", error));
}

export const deleteFirestoreData = refString => {
  firestore.doc(refString).delete();
};
//MAIN API END

//REFERENCE STRING CONSTRUCTORS
export const makeFirestoreRef = arr => {
  let reference = arr.join("/");
  console.log("makeFirestoreRef: ", reference)
  return reference;
};
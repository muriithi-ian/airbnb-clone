import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZ2VRBjSB7cxH6QuSV2cTRdHj5OHAebd4",
    authDomain: "airbnb-clone-react-73745.firebaseapp.com",
    projectId: "airbnb-clone-react-73745",
    storageBucket: "airbnb-clone-react-73745.appspot.com",
    messagingSenderId: "293447318617",
    appId: "1:293447318617:web:c4f9822bd8091722374548",
    measurementId: "G-FYLHF7QKGW"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();


export { db, auth, storage };
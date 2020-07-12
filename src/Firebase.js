import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyD2t-XcwxMDcHvI9mS0JaF_OV1hMPPhzXw",
    authDomain: "dimsui-8.firebaseapp.com",
    databaseURL: "https://dimsui-8.firebaseio.com",
    projectId: "dimsui-8",
    storageBucket: "dimsui-8.appspot.com",
    messagingSenderId: "1033515466503",
    appId: "1:1033515466503:web:1b5aaa4e5f671668b84fa2",
    measurementId: "G-G5G48YXVK4"
  };
firebase.initializeApp(config);
const db = firebase.firestore();


export default db;


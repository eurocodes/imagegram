import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPuz7O0QK1e_jOpNCjfqwn-Z0RRWlSKV0",
    authDomain: "imagram-firebase.firebaseapp.com",
    databaseURL: "https://imagram-firebase.firebaseio.com",
    projectId: "imagram-firebase",
    storageBucket: "imagram-firebase.appspot.com",
    messagingSenderId: "228031880512",
    appId: "1:228031880512:web:965d391e79f7d33777eea5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ProjectStorage = firebase.storage();
const ProjectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { ProjectStorage, ProjectFirestore, timestamp };
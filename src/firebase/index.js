import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDOP4OoIseSvTYhLLQTPF3OWpHvnz-q10Y",
    authDomain: "subirarchivo-ddb3e.firebaseapp.com",
    databaseURL: "https://subirarchivo-ddb3e.firebaseio.com",
    projectId: "subirarchivo-ddb3e",
    storageBucket: "subirarchivo-ddb3e.appspot.com",
    messagingSenderId: "390263385513",
    appId: "1:390263385513:web:933dec3f5654aee9f0e8b8",
    measurementId: "G-LDHMWCHPS5"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
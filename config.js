import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyBoOYXEBMe4901AZw3swNSQDr_ky9eCrQY",
        authDomain: "p67-fcb9f.firebaseapp.com",
        databaseURL: "https://p67-fcb9f-default-rtdb.firebaseio.com",
        projectId: "p67-fcb9f",
        storageBucket: "p67-fcb9f.appspot.com",
        messagingSenderId: "592912673027",
        appId: "1:592912673027:web:0d1ae030709cb750a66136"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
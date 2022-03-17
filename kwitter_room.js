// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDtJwsdDf-4WKyQ9HhxYCzwZjDzOiRBYFA",
      authDomain: "kwitter-c945f.firebaseapp.com",
      databaseURL: "https://kwitter-c945f-default-rtdb.firebaseio.com",
      projectId: "kwitter-c945f",
      storageBucket: "kwitter-c945f.appspot.com",
      messagingSenderId: "429027108213",
      appId: "1:429027108213:web:681587eac499d9b2589f3c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

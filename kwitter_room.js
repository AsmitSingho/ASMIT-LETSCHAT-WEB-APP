
const firebaseConfig = {
      apiKey: "AIzaSyAzt2ZZRjWBypOKgLhie4e-LILBYHNOf6o",
      authDomain: "kwitter-218fd.firebaseapp.com",
      projectId: "kwitter-218fd",
      storageBucket: "kwitter-218fd.appspot.com",
      messagingSenderId: "551219598144",
      appId: "1:551219598144:web:c5199a78f72c79fc66a0a5"
    };

    //initialize firebase
    firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

const firebaseConfig = {
      apiKey: "AIzaSyCAQdVrL_IrtaOz0vVeCz1vFIRpRlp291w",
      authDomain: "lets-chat-web-app-projec-2a325.firebaseapp.com",
      projectId: "lets-chat-web-app-projec-2a325",
      storageBucket: "lets-chat-web-app-projec-2a325.appspot.com",
      messagingSenderId: "665438296247",
      appId: "1:665438296247:web:9b81c72290125a70c8d532"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });
      //End code
      });});}
getData();

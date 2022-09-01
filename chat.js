// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDP-44zrnji_dZW80eXhd0tKe9jPei7JSo",
    authDomain: "project-100-a8118.firebaseapp.com",
    databaseURL: "https://project-100-a8118-default-rtdb.firebaseio.com",
    projectId: "project-100-a8118",
    storageBucket: "project-100-a8118.appspot.com",
    messagingSenderId: "122335798287",
    appId: "1:122335798287:web:978889dbd0df903728ef7a",
    measurementId: "G-W4CGC2PJ2X"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




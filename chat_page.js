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
 function getData(){firebase.database().ref("/"+ room_name).on('value', function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(child_snapshot){child_key =child_snapshot.key;child_data= child_snapshot.val(); if(child_key != "purpose"{
  firebase_message_id = child_key;
  message_data = childData;
 })});})}
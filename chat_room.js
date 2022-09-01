function getData(){firebase.data().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key; Room_names = childKey;0 });});}
getData();
function logout(){
    window.location= "index.html";
}
function addRoom() {
 console.log(message_data);
 name = message_data['name'];
 message = message_data['message'];
 like  =message_data['like'];
 name_with_tag = "<h4>" + name + "<image class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>"+ message+"</h4>";
 like_button = "<button class='btn btn-warning' id=''"+ firebase_message_id + "'value ='" + like + "'onclick = 'updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like + "</span></button><hr>";
 row = name_with_tag + message_with_tag + like_button + span_with_tag;
} 

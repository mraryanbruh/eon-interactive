var firebaseConfig = {
    apiKey: "AIzaSyCtcDA6w61IWlVT3inHwBI5OiDZN6SrDaM",
    authDomain: "classtest-13941.firebaseapp.com",
    databaseURL: "https://classtest-13941-default-rtdb.firebaseio.com",
    projectId: "classtest-13941",
    storageBucket: "classtest-13941.appspot.com",
    messagingSenderId: "360917212434",
    appId: "1:360917212434:web:251bfaa299d6638acfa7cb"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

  function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
  }
  function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });
 });
}

getData();

function redirectToRoomName(name) { 
    console.log(name);
    localStorage.setItem("room_name", name); 
    window.location = "kwitter_page.html"; 
} 

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
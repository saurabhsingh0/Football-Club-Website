// Initialize Firebase
var config = {
    apiKey: "AIzaSyCs0QHsRT09syRmsEsuE3AW3eIZq8MEaC8",
    authDomain: "playersinfo-25111.firebaseapp.com",
    databaseURL: "https://playersinfo-25111.firebaseio.com",
    projectId: "playersinfo-25111",
    storageBucket: "playersinfo-25111.appspot.com",
    messagingSenderId: "960200603652"
  };
  firebase.initializeApp(config);
   //reference 
   var playerReference = firebase.database().ref("players");

// Listen for form submit
 document.getElementById("playerDetails").addEventListener('submit', submitDetails);

 function submitDetails(e){

	  var name=document.getElementById("name").value;
	  var position=document.getElementById("position").value;
	  var appearances=document.getElementById("appearances").value;
	  var goals=document.getElementById("goals").value;

	  savePlayer(name,position,appearances,goals);

	  //show alert
	  document.querySelector(".alert").style.display= "block";

	  //hide alert after 3 Seconds
	  setTimeout(function(){
	  	document.querySelector(".alert").style.display= "none";
	  },10000);

	  //to reset
	  document.getElementById("playerDetails").reset();
	  
	
 }

 //function save
 function savePlayer (name, position, appearances, goals) {
	 var newPlayerRef = playerReference.push();
	 newPlayerRef.set({
		 Name: name,
		 Position: position,
		 Appearances: appearances,
		 Goals: goals
 	 });
 }
//$(document).ready(function(){

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
	var rootRef=firebase.database().ref().child("Players");

	rootRef.on("child_added", snap => {
		
		var name= snap.child("Name").val();
		var appearances= snap.child("Appearances").val();
		var goals=snap.child("Goals").val();

		$("#table_body").append("<tr><td>" + name + "</td><td>" + appearances + "</td><td>" + goals + "</td></tr>");
	});




//});
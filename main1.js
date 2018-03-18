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
var retrievePlayerInfo =document.getElementById("retrievePlayerInfo");

var firebaseRef= firebase.database().ref().child("heading");

firebaseRef.on('value',function(datasnapshot){
	retrievePlayerInfo.innerText= datasnapshot.val();
	console.log(retrievePlayerInfo);
});
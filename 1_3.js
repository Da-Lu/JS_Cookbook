//Conditionally Comparing String
var strName = prompt("What's your name?","");
if(strName == "Shelley"){
	alert("Your name is Shelley! Good for you!");
} else {
	alert("Your name isn't Shelley. Bummer.");
}

//case factor
if(strName.toUpperCase() == "SHELLEY") {
	alert("Your name is Shelley! Good for you!");
} else {
	alert("Your name isn't Shelley. Bummer.");
}


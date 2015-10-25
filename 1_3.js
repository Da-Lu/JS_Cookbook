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

var numVal = 10.0;
if(numVal == "10") alert("This value is ten");//succeeds

//strict equality operator(===)
var strObject =  new String("Shelley");
var strLiteral = "Shelley";
if(strObject == strLiteral) //this comparison succeeds

if(strObject == strLiteral) //fails because of different data types

//lexically with strings
var sOne = "cat";
var sTwo = "dog";
if(sOne > sTwo) //false

var sOne = "Cat";
var sTow = "cat";
if(sOne >= sTwo)// true

//String method localeCompare
var fruit1 = "apple";
var fruit2 = "grape";
var i = fruit1.localeCompare(fruit2); //returns -1


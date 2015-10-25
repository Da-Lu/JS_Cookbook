//Finding a Substring in a String
var testValue = "This is the Cookbook's test string";
var subsValue = "Cookbook";

var iValue = testValue.indexOf(subsValue); //returns value of 12, index of substring

if(iValue != -1) // succeeds, because substring exists

var tstString = "This apple is my apple";
var iValue = tstString.indexOf("apple",10);// returns 17, index of second substring

var txtString = "This apple is my apple";
var iValue = tstString.lastIndexOf("apple");//returns 17

"This apple is my apple".lastIndexOf("apple"); //returns value of 17
"This apple is my apple".lastIndexOf("apple",12); //returns value of 5
"This apple is my apple".lastIndexOf("apple",3); //reutrns value of -1, not found

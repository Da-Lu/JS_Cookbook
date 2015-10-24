//Concatenating a String and Another Data Type
var numValue = 23.45;
var total = "And the total is " + numValue; //string has "And the total is 23.45"

//add a boolean to a string
var boolValue = true;
var stringValue = "The value is " + boolValue; //results in "The value is true"

var strObject = new String("The value is ");
var strngLiteral = "a string";
var strngValue = strObject + strngLiteral;
//The resulting string is a string literal, not a String object.

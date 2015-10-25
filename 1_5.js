//Extracting a Substring form a String
var sentence = "This is one sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";

var start = sentence.indexOf(":");
var end = sentence.indexOf(".",start+1);

var list = sentence.substring(start+1, end);
//substr(start,[length]);

var fruits = list.split(",");

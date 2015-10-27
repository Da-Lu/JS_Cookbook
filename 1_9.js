var txtBox = document.getElementById("inputbox");
var lines = txtBox.value.split("\n");

//print out last line to page
var blk = document.getElementById("result");
blk.innerHTML = lines[lines.length-1];

//get textarea string and split on new lines
var txtBox = document.getElementById("test");
var lines = txtBox.value.split("\n");

//generate HTML version of text
var resultString = "<p>";
for(var i = 0; i < lines.length; i++)
{
	resultString += lines[i] + "<br />";
}
resultString += "</p>";

//print out to page
var blk = document.getElementById("result");
blk.innerHTML = resultString;

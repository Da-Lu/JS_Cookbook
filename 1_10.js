//Trimming Witespace from the ends of a String
var txtBox = document.getElementById("test");
var lines = txtBox.value.split("\n");

var resultString = "";

for(var i = 0; i< lines.length; i++)
{
	var strng = lines[i].trim();
	resultString += strng + "-";
}
alert(resultString);

//for all broswers
if(typeof String.trim == "undefined"){
	String.prototype.trim = function() {
		return this.replace(/(^\s*)|(\s*$)/g,"");
	}
}

//trimLeft trimRight
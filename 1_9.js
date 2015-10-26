var txtBox = document.getElementById("inputbox");
var lines = txtBox.value.split("\n");

//print out last line to page
var blk = document.getElementById("result");
blk.innerHTML = lines[lines.length-1];
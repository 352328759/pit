var x = document.querySelectorAll("[alt='expand code']");
var x = document.querySelectorAll(".code-expand-icon-hide");
for(var i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "red";
}

var x = document.querySelectorAll(".code-expand-icon-show");
for(var i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "green";
}
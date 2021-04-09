// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
//menu responsive
function myFunction() {
	var x = document.getElementById("myTopnav");
		if (x.className === "menu") {
		    x.className += " responsive";
		  } else {
		    x.className = "menu";
		  }
		}
	
var num = 0;
var weight = document.getElementsByClassName("weight")[0];
var textarea = document.getElementsByClassName("textarea")[0];
weight.onclick = function fWeight() {
	num ++;
	num %= 2;
	switch(num){
		case 1:
		textarea.style.fontWeight = "700";
		break;
		case 0:
		textarea.style.fontWeight = "normal";
	}
	
}
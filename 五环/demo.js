var start = document.getElementsByClassName("start")[0];
var demo = document.getElementsByClassName("demo")[0];
var demo1 = document.getElementsByClassName("demo1")[0];
var demo2 = document.getElementsByClassName("demo2")[0];
var demo3 = document.getElementsByClassName("demo3")[0];
var demo4 = document.getElementsByClassName("demo4")[0];
var demo5 = document.getElementsByClassName("demo5")[0];
var count = 0;
var num = 0;
start.onclick = function () {
t =	setInterval(play,1000);
}
function play() {
	start.style.display = "none";
	active();
	init();
}
function init() {
	count ++;
	count %= 5;
	switch(count){
		case 1:
	    demo1.style.border = "10px solid green";
	    demo2.style.border = "10px solid red";
	    demo3.style.border = "10px solid black";
	    demo4.style.border = "10px solid yellow";
	    demo5.style.border = "10px solid orange";
	    demo1.style.color = "green";
	    demo2.style.color = "red";
	    demo3.style.color = "black";
	    demo4.style.color = "yellow";
	    demo5.style.color = "orange";
	    break;
	    case 2:
	    demo1.style.border = "10px solid yellow";
	    demo2.style.border = "10px solid green";
	    demo3.style.border = "10px solid red";
	    demo4.style.border = "10px solid orange";
	    demo5.style.border = "10px solid black";
	    demo1.style.color = "yellow";
	    demo2.style.color = "green";
	    demo3.style.color = "red";
	    demo4.style.color = "orange";
	    demo5.style.color = "black";
	    break;
	    case 3:
	    demo1.style.border = "10px solid orange";
	    demo2.style.border = "10px solid yellow";
	    demo3.style.border = "10px solid green";
	    demo4.style.border = "10px solid black";
	    demo5.style.border = "10px solid red";
	    demo1.style.color = "orange";
	    demo2.style.color = "yellow";
	    demo3.style.color = "green";
	    demo4.style.color = "black";
	    demo5.style.color = "red";
	    break;
	    case 4:
	    demo1.style.border = "10px solid black";
	    demo2.style.border = "10px solid orange";
	    demo3.style.border = "10px solid yellow";
	    demo4.style.border = "10px solid red";
	    demo5.style.border = "10px solid green";
	    demo1.style.color = "black";
	    demo2.style.color = "orange";
	    demo3.style.color = "yellow";
	    demo4.style.color = "red";
	    demo5.style.color = "green";
	    break;
	    case 0:
	    demo1.style.border = "10px solid red";
	    demo2.style.border = "10px solid black";
	    demo3.style.border = "10px solid orange";
	    demo4.style.border = "10px solid green";
	    demo5.style.border = "10px solid yellow";
	    demo1.style.color = "red";
	    demo2.style.color = "black";
	    demo3.style.color = "orange";
	    demo4.style.color = "green";
	    demo5.style.color = "yellow"; 
    }
}
function active() {
	num ++;
	num %= 5;
	switch(num){
		case 1:
	    demo1.style.left = "30px";
	    demo2.style.top = "-90px";
	    demo3.style.left = "250px";
	    demo4.style.top = "130px";
	    demo5.style.top = "130px";
        break;
        case 2:
        demo1.style.left = "140px";
        demo1.style.top = "0";
	    demo2.style.left = "140px";
	    demo2.style.top = "0";
	    demo3.style.left = "140px";
	    demo3.style.top = "0";
	    demo4.style.left = "140px";
	    demo4.style.top = "0";
	    demo5.style.left = "140px";
	    demo5.style.top = "0";
        break;
        case 3:
        demo1.style.width = "50px";
        demo1.style.height = "50px";
	    demo2.style.width = "50px";
	    demo2.style.height = "50px";
	    demo3.style.width = "50px";
	    demo3.style.height = "50px";
	    demo4.style.width = "50px";
	    demo4.style.height = "50px";
	    demo5.style.width = "50px";
	    demo5.style.height = "50px";
        demo1.style.left = "140px";
        demo1.style.top = "-360px";
	    demo2.style.left = "140px";
	    demo2.style.top = "-270px";
	    demo3.style.left = "140px";
	    demo3.style.top = "-180px";
	    demo4.style.left = "140px";
	    demo4.style.top = "-90px";
	    demo5.style.left = "140px";
	    demo5.style.top = "0";
        break;
        case 4:
        demo1.style.width = "100px";
        demo1.style.height = "100px";
	    demo2.style.width = "100px";
	    demo2.style.height = "100px";
	    demo3.style.width = "100px";
	    demo3.style.height = "100px";
	    demo4.style.width = "100px";
	    demo4.style.height = "100px";
	    demo5.style.width = "100px";
	    demo5.style.height = "100px";
        demo1.style.left = "-140px";
        demo1.style.top = "-180px";
	    demo2.style.left = "0";
	    demo2.style.top = "-180px";
	    demo3.style.left = "140px";
	    demo3.style.top = "-180px";
	    demo4.style.left = "280px";
	    demo4.style.top = "-180px";
	    demo5.style.left = "420px";
	    demo5.style.top = "-180px";
	    break;
	    case 0:
	    text();
	    num = NaN;
    }
}
function text() {
	demo1.innerHTML = "H";
	demo2.innerHTML = "E";
	demo3.innerHTML = "L";
	demo4.innerHTML = "L";
	demo5.innerHTML = "O";
}
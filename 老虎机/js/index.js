var count = 0;
var num = 0;
var wrapper = document.getElementsByClassName("wrapper")[0];
var center = document.getElementsByClassName("center");
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid red";
div.style.position = "absolute";
div.style.left = "0";
div.style.top = "0";
center[1].style.display = "none";
wrapper.appendChild(div);
center[0].onclick = function () {
	s = setInterval(stop,200);
	r = setInterval(right,200);
	center[0].style.display = "none";
	center[1].style.display = "block";
	if(sum == count || tum == num ){
		clearInterval(r);
		clearInterval(d);
		clearInterval(l);
		clearInterval(u);
	}
}
function right() {
	count += 100;
	div.style.left = count + "px";
    if(count >= 200){
    	clearInterval(r);
      d = setInterval(down,200);
    }
}
function down() {
	num += 100;
	div.style.top = num + "px";
	if(num >= 200){
        clearInterval(d);
       l = setInterval(left,200);
	}
}
function left() {
	count -= 100;
	div.style.left = count + "px";
	if(count <= 0){
		clearInterval(l);
        u = setInterval(up,200);
	}
}
function up() {
	num -= 100;
	div.style.top = num + "px";
	if(num <= 0){
		clearInterval(u);
		r = setInterval(right,200);
	}
}
function stop() {
    var sum = Math.floor(Math.random() * 100);
    var tum = Math.floor(Math.random() * 100);
    return sum;
    return tum;
}

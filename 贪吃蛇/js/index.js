//1.开始游戏---》startPage消失，wrpper出现
//2.出现三节小蛇，出现食物
//3.判断小蛇吃到食物---》小蛇身体加一，食物消失，分数加一
//判断游戏结束---》loser弹出，
var main = document.getElementById("main");
var startPage = document.getElementById("startPage");
var startBtn = document.getElementById("startBtn");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var scoreBox = document.getElementById("score");
var loser = document.getElementById("loser");
var loseScore = document.getElementById("loseScore");
var close = document.getElementById("close");

init();
function init() {
	//地图
	this.mapW = parseInt(getComputedStyle(main).width);
	this.mapH = parseInt(getComputedStyle(main).height);
	this.mapDiv = main;
	//食物
	this.foodW = 20;
	this.foodH = 20;
	this.foodX = 0;
	this.foodY = 0;
	//snake
	this.snakeW = 20;
    this.snakeH = 20;
	this.snakeBody = [[2,0,"head"],[1,0,"body"],[0,0,"body"]];
	this.key = "right";
	this.score = 0;
	this.right = false;
	this.left = false;
	this.up = true;
	this.down = true;
}
startBtn.onclick = function startGame() {
	food();
	snake();
	start.style.display = "block";
	startPage.style.display = "none";
    t = setInterval(move,200);
	bindEvent();
}
function food() {
	var food = document.createElement("div");
	food.style.width = this.foodW + "px";
	food.style.height = this.foodH + "px";
	food.style.position = "absolute";
	food.style.borderRadius = "50%";
	food.style.backgroundColor = "red";
	this.foodX = Math.floor(Math.random() * (this.mapW / 20));
	this.foodY = Math.floor(Math.random() * (this.mapH / 20));
	food.style.left = this.foodX * 20 + "px";
	food.style.top = this.foodY * 20 + "px";
	this.mapDiv.appendChild(food).classList.add("food");
}
function snake() {
	for(i = 0; i < this.snakeBody.length; i ++) {
		var snake = document.createElement("div");
        snake.style.width = this.snakeW + "px";
        snake.style.height = this.snakeH + "px";
        snake.style.position = "absolute";
        snake.style.left = this.snakeBody[i][0] * 20 + "px";
        snake.style.top = this.snakeBody[i][1] * 20 + "px";
        snake.classList.add(this.snakeBody[i][2]);
        this.mapDiv.appendChild(snake).classList.add("snake");
	switch(this.key) {
	    	case "right":
	    	break;
	    	case "left":
	    	snake.style.transform = "rotate(180deg)";
	    	break;
	    	case "up":
	    	snake.style.transform = "rotate(270deg)";
	    	break;
	    	case "down":
	    	snake.style.transform = "rotate(90deg)";
	    	break;
    }
    }
}

function move() {
	for(i = this.snakeBody.length - 1; i > 0; i --) {
		this.snakeBody[i][0] = this.snakeBody[i - 1][0];
		this.snakeBody[i][1] = this.snakeBody[i - 1][1];
	}
	    switch(this.key) {
	    	case "right":	    	
	    	this.snakeBody[0][0] += 1;
	    	break;
	    	case "left":	    	
	    	this.snakeBody[0][0] -= 1;
	    	break;
	    	case "up":
	    	this.snakeBody[0][1] -= 1;
	    	break;
	    	case "down":
	    	this.snakeBody[0][1] += 1;
	    	break;
	    }

	removeClass("snake");
	snake();
    while(this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] ==this.foodY){
        var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0]; 
        var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
        switch(this.key) {
	    	case "right":	    	
	    	this.snakeBody.push([snakeEndX + 1,snakeEndY,"body"]);
	    	break;
	    	case "left":	    	
	    	this.snakeBody.push([snakeEndX - 1,snakeEndY,"body"]);
	    	break;
	    	case "up":
	    	this.snakeBody.push([snakeEndX,snakeEndY - 1,"body"]);
	    	break;
	    	case "down":
	    	this.snakeBody.push([snakeEndX,snakeEndY + 1,"body"]);
	    	break;
	    }
	    snake();
  		this.score += 1;
  		scoreBox.innerHTML = this.score;
  		removeClass("food");
  		food();
  	}
  	if(this.snakeBody[0][0] < 0 || this.snakeBody[0][1] < 0 || this.snakeBody[0][0] >= this.mapW/20 || this.snakeBody[0][1] >= this.mapH/20){
	       relodGame();
	}
	for(i = 1; i < this.snakeBody.length; i ++){
		if(this.snakeBody[0][0] == this.snakeBody[i][0] && this.snakeBody[0][1] == this.snakeBody[i][1]){
		    relodGame();	
		}
	}
	for(i = 1; i < this.snakeBody.length; i ++){
		if(this.snakeBody[i][0] == this.foodX && this.snakeBody[i][1] == this.foodY){
			removeClass("food");
			food();
		}
	}	
	if(score >= 20){
		clearInterval(t);
	    t =	setInterval(move,150);
	}
	if(score >= 50){
		clearInterval(t);
	    t =	setInterval(move,100); 	
	}	
}
function relodGame() {
	removeClass("snake");
    removeClass("food");
    clearInterval(t);
	this.snakeBody = [[2,0,"head"],[1,0,"body"],[0,0,"body"]];
	this.key = "right"; 
	this.right = false;
	this.left = false;
	this.up = true;
	this.down = true;
	loser.style.display = "block";
    loseScore.innerHTML = this.score;
	this.score = 0;
	scoreBox.innerHTML = this.score;
	if(loser.style.display = "block") {
    	document.onkeydown = function(e) {
    		e.returnValue = false;
    	}
    }
	    
}
function removeClass(className) {
	var ele = document.getElementsByClassName(className);
	while(ele.length > 0) {
		ele[0].parentNode.removeChild(ele[0]);
	}
}
function setDerict(code) {
	switch(code){
     	case 37:
     	if(this.left){
	    		this.key = "left";
	            this.right = false;
	            this.left = false;
	            this.up = true;
	            this.down = true;
	    	}
     	break;
     	case 38:
     	if(this.up){
	    		this.key = "up";
	            this.right = true;
	            this.left = true;
	            this.up = false;
	            this.down = false;
	    	}
     	break;
     	case 39:
     	if(this.right){
	    		this.key = "right";
	            this.right = false;
	            this.left = false;
	            this.up = true;
	            this.down = true;
	    	}
     	break;
     	case 40:
     	if(this.down){
	    		this.key = "down";
	            this.right = true;
	            this.left = true;
	            this.up = false;
	            this.down = false;
	    	}
     	break;
     	default:
        break;
        } 
}
function bindEvent() {
    document.onkeydown = function(e) {
        var code = e.keyCode;
        setDerict(code);     
    }
    close.onclick = function () {
	    loser.style.display = "none";
	    startPage.style.display = "block";
	    start.style.display = "none";
	    stop.style.display = "none"; 
    }
    start.onclick = function () {
        clearInterval(t);
        start.style.display = "none";
        stop.style.display = "block";
    }
    stop.onclick = function () {
        t = setInterval(move,200);
        start.style.display = "block";
        stop.style.display = "none";
    } 
} 


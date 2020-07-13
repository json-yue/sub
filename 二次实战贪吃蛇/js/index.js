var counter = document.getElementsByClassName("counter")[0];
init();
function init() {
	this.snakeBody = [[2,0],[1,0],[0,0]];
	this.mapDiv = counter;
	this.key = "right";
	this.right = false;
	this.left = false;
	this.up = true;
	this.down = true;
}
function snake() {
	for(var i = 0; i < this.snakeBody.length; i ++){
		var snake = document.createElement("div");
		snake.style.position = "absolute";
		snake.style.left = this.snakeBody[i][0]*20 + "px";
		snake.style.top = this.snakeBody[i][1]*20 + "px";
		snake.style.width = "20px";
		snake.style.height = "20px";
		snake.style.backgroundColor = "red";
		this.mapDiv.appendChild(snake).classList.add("snake");
	}
}
snake();
setInterval(move,200);
function move() {
	for(var i = this.snakeBody.length - 1; i > 0; i --){
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
	    console.log(this.snakeBody[0][1]);
	    console.log(this.snakeBody[0][0]);
	removeClass("snake");
	snake();
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
bindEvent();
function bindEvent() {
    document.onkeydown = function(e) {
        var code = e.keyCode;
        setDerict(code);     
    }
}  
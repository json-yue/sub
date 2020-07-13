var stand = document.getElementById("stand");
var advance = document.getElementById("advance");
var retreat = document.getElementById("retreat");
var gas = document.getElementById("gas");
var bg = document.getElementById("bg");
advance.style.left = 0;
retreat.style.left = 0;
stand.style.left = 0;
gas.style.left = 0;
document.onkeydown = function(e){
	switch(e.which){
		case 37:
		    gas.style.display = "none";
            advance.style.display = "none";
            stand.style.display = "none";
            retreat.style.display = "block";
            retreat.style.left = parseInt(retreat.style.left) - 10 + "px";
            advance.style.left = parseInt(advance.style.left) - 10 + "px";
            stand.style.left = parseInt(stand.style.left) - 10 + "px";
            gas.style.left = parseInt(gas.style.left) - 10 + "px";		
		    break;
		case 39:
		    gas.style.display = "none";
		    retreat.style.display = "none";
            stand.style.display = "none";
		    advance.style.display = "block";
		    advance.style.left = parseInt(advance.style.left) + 10 + "px";
            retreat.style.left = parseInt(retreat.style.left) + 10 + "px";
            stand.style.left = parseInt(stand.style.left) + 10 + "px";
            gas.style.left = parseInt(gas.style.left) + 10 + "px";
		    break;
		case 79:
		    advance.style.display = "none";
            retreat.style.display = "none";
            stand.style.display = "none";
            gas.style.display = "block";            
	}
	if(parseInt(retreat.style.left) < 0){
 	    retreat.style.left = 0;
 	    advance.style.left = 0;
 	    stand.style.left = 0;
        gas.style.left = 0;
    }
 }
document.onkeyup = function(e){
	switch(e.which){
		case 37:
		    gas.style.display = "none";
            advance.style.display = "none";
            retreat.style.display = "none";
            stand.style.display = "block";		
		    break;
		case 39:
		    gas.style.display = "none";
		    retreat.style.display = "none";
            stand.style.display = "block";
		    advance.style.display = "none";
		    break;
		case 79:
		    gas.style.display = "none";
		    stand.style.display = "block";            
	}


 }

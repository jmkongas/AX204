// alert("It's working");

//loading my sprite
var pikachu = new Image();
pikachu.src="pika.png"
//Drawing sprite onto canvas
pikachu.onload = function(){
	ctx3.drawImage(pikachu,50,200,40,70); 
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

//start drawing
ctx.beginPath();
//set drawing style
ctx.strokeStyle="red";
//move your pen to the starting point
ctx.moveTo(75,0);
//draw line1
ctx.lineTo(150,75);
//draw line2
ctx.lineTo(75,150);
//draw line3
ctx.lineTo(0,75);
//draw line back to starting point
ctx.closePath();
//actually drawing
ctx.stroke();
//set fill color
ctx.fillStyle="red";
//actually fill the shape
ctx.fill();

var c3=document.getElementById("myCanvas3");
var ctx3=c3.getContext("2d");

ctx3.beginPath();
//draw circle- 5 parameters:centerx, centery, radius, 0, 6.28
ctx3.arc(150,150,30,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="blue";
ctx3.fill();



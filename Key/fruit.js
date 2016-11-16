// alert ("It works!");

//Declaring and initializing variables
var canvas;
var ctx;
//Starting position and radius of player sprite
var x = 250; //setting original position of circle
var y = 250;
var r = 20;
//Holding the speed in the x and y directions
var mx = 0; 
var my = 0;
//Positions of fruits
var goodX;
var goodY;
var badX;
var badY;
var fruitWidth = 50;
var fruitHeight = 50;
//Boolean to keep track whether collision is happening
var goodCollision = false;
var badCollision = false;
//width and height of canvas;
var width = 500;
var height = 500;

//this function will draw the ball every 10 milliseconds
function init(){
	canvas=document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	// Waiting for user to press keyboard (behaviour coded in keydownControl)
	window.onkeydown = keydownControl;
	//Redraw the canvas every 10ms
	return setInterval(draw,10);
}

//characteristics and drawing of the ball
function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

//Clear your canvas
function clear(){
	ctx.clearRect(0,0,width, height);
}

//draw function to create a frame
function draw(){
	clear();
	circle(x,y,r);
	//to make the circle stay in the canvas
	if (x+mx > width-r || x+mx < 0+r){
		mx = -mx; //change to opposite direction
	}
	else if (y+my > height-r ||y+my <0+r){
		my = -my;
	}

	//move your x and y every frame
	x+=mx;	//x=x+mx
	y+=my;	//y=y+my
}

function keydownControl(e) {
	// Change the speed depending on which button is pressed
	if(e.keyCode == 37) {
		mx = -4;
		my = 0
	} else if (e.keyCode == 38) {
		mx = 0;
		my = -4
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0
	} else if (e.keyCode == 40) {
		mx = 0;
		my = 4;
	}
}

init();



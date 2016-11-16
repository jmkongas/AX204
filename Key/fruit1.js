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
var score=0;

//this function will draw the ball every 10 milliseconds
function init(){
	canvas=document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	//random locations for good and bad fruit
	badX= Math.floor(Math.random()*450);
	badY= Math.floor(Math.random()*450);
	goodX= Math.floor(Math.random()*450);
	goodY= Math.floor(Math.random()*450);
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
	drawBadFruit();
	drawGoodFruit();
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

	collisionCheck();
	collisionHandle();
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

function drawBadFruit(){
	ctx = document.getElementById("myCanvas").getContext("2d");
	var bad = new Image ();
	bad.src = "bad.png";
	ctx.drawImage(bad,badX,badY,50,50);
}

function drawGoodFruit(){
	ctx = document.getElementById("myCanvas").getContext("2d");
	var good = new Image ();
	good.src = "good.png";
	ctx.drawImage(good,goodX,goodY,50,50);	
}

//check if the ball is touching the good fruit of the bad fruit 
function collisionCheck() {
	// Accounting for collision from the top left and the bottom right
	if( (x >= badX) && (x <= badX + fruitWidth) && (y >= badY) && (y <= badY + fruitHeight) ) {
		badCollision = true;
	} 
	else {
		badCollision = false;
	}

	if( (x >= goodX) && (x <= goodX + fruitWidth) && (y >= goodY) && (y <= goodY + fruitHeight) ) {
		goodCollision = true;
	} 
	else {
		goodCollision = false;
	}

}

function collisionHandle() {
	// If there is a collision, resets position of fruit and changes the score
	if (badCollision == true) {
		badX = Math.floor(Math.random() * 450);
  		badY = Math.floor(Math.random() * 450);
  		score -= 1;
  		document.getElementById("score").innerHTML = "Score: "+score;
	}
	if (goodCollision == true) {
		goodX = Math.floor(Math.random() * 450);
  		goodY = Math.floor(Math.random() * 450);
  		score += 1;
  		document.getElementById("score").innerHTML = "Score: "+score;
	}
}

init();



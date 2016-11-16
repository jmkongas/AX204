// alert ("It works!");

//Declaring & initializing variables
var canvas;
var ctx;
var x = 600;
var y = 300;
var x2 = 300;
var y2 = 150;
var x3 = 0;
var y3 = 300;
var mx = 8;
var my = 12;
var mx2 = 2;
var my2 = 4;
var mx3 = 0.5;
var my3 = 1;
var width = 1200;
var height = 600;

//this function will draw the ball every 10 milliseconds
function init(){
	canvas = document.getElementById("myCanvas");
	ctx =canvas.getContext("2d");
	return setInterval(draw,5);
}

//characteristics of the ball
function circle (x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,Math.PI*2)
	ctx.fillStyle = "green";
  ctx.fill();
}

// Clear our canvas
function clear() {
  ctx.clearRect(0, 0, width, height);
}

// Draw function to create a frame
function draw() {
  clear();
  circle(x, y, 45);
  circle(x2,y2,5);
  circle(x3,y3,25);
  // Stay inside the canvas
  if(x + mx > width || x + mx < 0) {
    mx = -mx;
  }
  if(y + my > height || y + my < 0) {
    my = -my
  }
  // Move our shape by incrementing the position by the magnitude of the movement
  x += mx;   // means the same as x = x + mx
  y += my;

  if(x2 + mx2 > width || x2 + mx2 < 0) {
    mx2 = -mx2;
  }
  if(y2 + my2 > height || y2 + my2 < 0) {
    my2 = -my2;
  }
  // Move our shape by incrementing the position by the magnitude of the movement
  x2 += mx2;   // means the same as x = x + mx
  y2 += my2;

  if(x3 + mx3 > width || x3 + mx3 < 0) {
    mx3 = -mx3;
  }
  if(y3 + my3 > height || y3 + my3 < 0) {
    my3 = -my3;
  }
  // Move our shape by incrementing the position by the magnitude of the movement
  x3 += mx3;   // means the same as x = x + mx
  y3 += my3;
}

init();
console.log("I am working!!")

var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d'); //tell HTML5 to make it like a 2D player/canvas

// ctx.moveTo(0,0);
// ctx.lineTo(100,200);
// ctx.stroke();
ctx.fillStyle = "rgb(128,128,128)"; //has to be a string
ctx.fillRect(100,100,100,100); //top left coordinates, width and height
ctx.strokeStyle = "rgb(128,128,128)";
ctx.strokeRect(80,80, 140,140);		//just drawing the outline (stroke)
ctx.clearRect(120,120,60,60);

var c2 = document.getElementById("secondCanvas");
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(0,0,150)";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(150,0,150,150);
ctx2.clearRect(0,150,150,150);

var c3 = document.getElementById("thirdCanvas");
var ctx3 = c3.getContext('2d');
ctx3.fillStyle = "rgb(0,0,150)";
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(20,160,120,120);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(160,160,120,120);

var c4 = document.getElementById("fourthCanvas");
var ctx4 = c4.getContext('2d');
ctx4.fillStyle = "rgb(0,0,150)";
ctx4.fillRect(0,0,300,300);
ctx4.clearRect(100,0,100,100);
ctx4.clearRect(0,100,100,100);
ctx4.clearRect(200,100,100,100);
ctx4.clearRect(100,200,100,100);

var c5 = document.getElementById("fifthCanvas");
var ctx5 = c5.getContext('2d');

var width = 300
var height = 300
var x = 0
var y = 0

ctx5.fillStyle = "rgb(0,0,150)";
ctx5.fillRect(x,y,width,height);

while (width > 0) {
	x+=10;
	y+=10;
	width-=20;
	height-=20;
	ctx5.clearRect(x,y,width,height);

	x+=10;
	y+=10;
	width-=20;
	height-=20;

	ctx5.fillStyle = "rgb(0,0,150)";
	ctx5.fillRect(x,y,width,height);
	
	// ctx4.fillStyle = "rgb(0,0,150)";
	// ctx4.fillRect(0,0,300,300);
	// ctx4.clearRect(20,20,120,120);
	// ctx4.clearRect(20,160,120,120);
	// ctx4.clearRect(160,20,120,120);
	// ctx4.clearRect(160,160,120,120);
}


	

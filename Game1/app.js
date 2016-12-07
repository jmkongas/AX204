// // alert("It works!");

// var game = new Phaser.Game(800,600,Phaser.AUTO,"",{preload:preload, create:create,update:update});
// var score = 0;

// function preload() {
// 	game.load.image('sky','assets/sky.png');
// 	game.load.image('ground', 'assets/platform.png');
// 	game.load.image('star', 'assets/star.png');

// 	//3rd and 4th parameters are width and height respectively
// 	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
// }

// function create() {
// 	game.physics.startSystem(Phaser.Physics.ARCADE);
// 	game.add.sprite(0, 0, 'sky');

// 	// Making group of platforms
// 	platforms = game.add.physicsGroup();
// 	platforms.enableBody = true;

// 	// Ground
// 	var ground = platforms.create(0, game.world.height - 64, 'ground');

// 	//  Scale it to fit the width of the game
// 	ground.scale.setTo(2, 2);
// 	//This stops it from falling away when you jump on it
// 	ground.body.immovable = true;

// 	// 2 extra ledges
// 	var ledge = platforms.create(400, 400, 'ground');
// 	ledge.body.immovable = true;
// 	ledge = platforms.create(-150, 250, 'ground');
// 	ledge.body.immovable = true;

// 	//Player
// 	//the player and its settings
// 	//create a player 32 is x-coordinate 
// 	//dude is a spritessheet that we previously loaded in the "preload" section
// 	player = game.add.sprite(32, game.world.height - 150, 'dude')
// 		//our two animations, walking left and right
// 		// player animations using spritesheet and applies game physics
// 		player.animations.add('left', [0, 1, 2, 3],10,true);
// 		player.animations.add('right', [5, 6, 7, 8], 10, true);
		
// 		//we need to enable physics on the player 
// 		game.physics.arcade.enable(player);
		
// 		//Player physics properties. Give the little guy a slight bounce.
// 		player.body.bounce.y = 0.2;
// 		player.body.gravity.y = 300;
// 		player.body.collideWorldBounds = true;

// 	//Creating keyboard entry
// 	//set the cursors as a keyboard input
// 	cursors = game.input.keyboard.createCursorKeys();

// }

// function update() {
// 	//  Collide the player and the stars with the platforms
// 	// this keeps the player from going through our platforms
//     game.physics.arcade.collide(player, platforms);

//     // Reset the player’s velocity (movement) if no events (ASK)
//     player.body.velocity.x = 0;

//   	// Left key pressed
//     if (cursors.left.isDown){
//         // Move to the left
//         player.body.velocity.x = -150;
//         // Play animation
//         player.animations.play('left');
//     } else if (cursors.right.isDown) {
//         player.body.velocity.x = 150;
//         player.animations.play('right');
//     } else {
//         //  Stand still
//         player.animations.stop();
//         player.frame = 4;
//       }
//     //  Allow the player to jump if they are touching the ground.
//     if (cursors.up.isDown && player.body.touching.down){
//         player.body.velocity.y = -300;
//       }

// }

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var score = 0;
var scoreText;

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//add sky as background
	game.add.sprite(0,0,'sky');
	
	//Making a group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 50, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400,400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150,250, 'ground');
	ledge.body.immovable = true;

	//Generate stars around the level for the player to collect
	//Start by creating a group called "stars"
	stars = game.add.group();
	//Adding physics to stars
	stars.enableBody = true;

	//16,16 coordinates to place the text
	//Score:0 is the default string to display when the game loads
	scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

	//Here we'll create 12 stars evenly spaced apart
	for (var i=0; i<12; i++) 
	{
		//Create a star inside the "stars" group
		var star = stars.create(i*70,0,'star');
		//Add gravity
		star.body.gravity.y = 500;
		//This gives each star a slightly random bounce value
		star.body.bounce.y = 0.7+ Math.random()*0.2;
	}

	// Player
	player = game.add.sprite(32, 400, 'dude');
		// animate sprite
		player.animations.add('left', [0,1,2,3], 10, true);
		player.animations.add('right', [5,6,7,8], 10, true);
		// add physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemies
	enemy1 = game.add.sprite(760, 20, 'baddie');
		// animate sprite
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [2,3], 10, true);
		// add physics
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(10, 20, 'baddie');
		// animate sprite
		enemy2.animations.add('left', [0,1], 10, true);
		enemy2.animations.add('right', [2,3], 10, true);
		// add physics
		game.physics.arcade.enable(enemy2);
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

	// Set up keyboard events
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	// Collision for player / enemy and the platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);
	game.physics.arcade.collide(stars, platforms);
	//the function "collectStar" will be called whenever the player walks over the stars
	game.physics.arcade.overlap(player, stars, collectStar, null, this);
	game.physics.arcade.overlap(player, enemy1,loseScore1, null, this);
	game.physics.arcade.overlap(player, enemy2,loseScore2, null, this);

	// Resets player sprite speed
	player.body.velocity.x = 0;

	// If key presseddhdklh
	if (cursors.left.isDown) {
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		// when player sprite stops
		player.animations.stop();
		player.frame = 4;
	}

	//Allow the player to jump if they are touching the ground
	//The player will fall to the ground automatically because we enabled gravity
	if (cursors.up.isDown && player.body.touching.down)
	{
		player.body.velocity.y = -350;
	}

	// Enemy AI
	if (enemy1.x > 759){
		enemy1.body.velocity.x = -120;
		enemy1.animations.play('left');
	} else if (enemy1.x < 405){
		enemy1.body.velocity.x = 120;
		enemy1.animations.play('right');
	}

	// Enemy AI2
	if (enemy2.x > 210){
		enemy2.body.velocity.x = -120;
		enemy2.animations.play('left');
	} else if (enemy2.x < 30){
		enemy2.body.velocity.x = 120;
		enemy2.animations.play('right');
	}

	function collectStar (player,star) {
		//Removes the star from the screen
		star.kill();
		//Add and update the score
		score+=10;
		scoreText.text = "Score: " +score;

		// Create new star
		stars.create(50, 0, 'star');
	    //  Let gravity do its thing
	    star.body.gravity.y = 200;
	    //  This just gives each star a slightly random bounce value
	    star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

	function loseScore1 (player,enemy1){
		score-=5;
		scoreText.text = "Score: " +score;
	}

	function loseScore2 (player,enemy2){
		score-=5;
		scoreText.text = "Score: " +score;
	}

}
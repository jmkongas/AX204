var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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
	enemy1 = game.add.sprite(760, 200, 'baddie');
		// animate sprite
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [2,3], 10, true);
		// add physics
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	// Set up keyboard events
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	//Collision between user and platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);

	//reset player velocity
	player.body.velocity.x = 0;

	//keyboard event
	if (cursors.left.isDown) {
		player.body.velocity.x= -150;
		player.animations.play("left");
	}else if (cursors.right.isDown) {
		player.body.velocity.x= 150;
		player.animations.play("right");
	}else {
		//when player sprite stops
		player.animations.stop();
		player.frame = 4;
	}

	//allow player sprite to jump
	if(cursors.up.isDown && player.body.touching.down)
	{
		player.body.velocity.y = -350;
	}



}
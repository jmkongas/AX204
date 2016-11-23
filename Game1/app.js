// alert("It works!");

var game = new Phaser.Game(800,600,Phaser.AUTO,"",{preload:preload, create:create,update:update});
var score = 0;

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');

	//3rd and 4th parameters are width and height respectively
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, 0, 'sky');

	// Making group of platforms
	var platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');

	//  Scale it to fit the width of the game
	ground.scale.setTo(2, 2);
	//This stops it from falling away when you jump on it
	ground.body.immovable = true;

	// 2 extra ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	//Player
	//the player and its settings
	//create a player 32 is x-coordinate 
	//dude is a spritessheet that we previously loaded in the "preload" section
	player = game.add.sprite(32, game.world.height - 150, 'dude')
		//our two animations, walking left and right
		// player animations using spritesheet and applies game physics
		player.animations.add('left', [0, 1, 2, 3],10,true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		//we need to enable physics on the player 
		game.physics.arcade.enable(player);

}

function update() {
}
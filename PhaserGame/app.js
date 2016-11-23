var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//add sky as background
	game.add.sprite(0,0,'sky');

	//Making a group of platforms
	var platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	//Ground
	var ground = platforms.create (0, game.world.height-64, 'ground');
	
}

function update() {
}
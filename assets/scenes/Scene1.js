
/**
 * Scene1.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function Scene1(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// insert pre-init code here

	/* --- pre-init-end --- */

	this.game.add.tileSprite(0, 32, 1216, 176, 'tiles', 18, this);

	var ground = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);

	this.game.add.tileSprite(0, 0, 448, 112, 'tiles', 34, ground);

	this.game.add.tileSprite(1184, 96, 32, 176, 'tiles', 34, ground);

	this.game.add.tileSprite(0, 192, 464, 80, 'tiles', 34, ground);

	this.game.add.tileSprite(0, 112, 16, 64, 'tiles', 35, ground);

	this.game.add.sprite(0, 176, 'tiles', 34, ground);

	this.game.add.sprite(16, 176, 'tiles', 25, ground);

	this.game.add.sprite(32, 176, 'tiles', 27, ground);

	this.game.add.sprite(496, 176, 'tiles', 21, ground);

	this.game.add.sprite(528, 160, 'tiles', 20, ground);

	this.game.add.sprite(544, 176, 'tiles', 29, ground);

	this.game.add.tileSprite(560, 144, 336, 128, 'tiles', 34, ground);

	this.game.add.sprite(928, 144, 'tiles', 20, ground);

	this.game.add.sprite(976, 144, 'tiles', 13, ground);

	this.game.add.sprite(1024, 144, 'tiles', 21, ground);

	this.game.add.tileSprite(1216, 96, 16, 176, 'tiles', 34, ground);

	this.game.add.tileSprite(1152, 112, 32, 160, 'tiles', 34, ground);

	this.game.add.tileSprite(1120, 128, 32, 144, 'tiles', 34, ground);

	this.game.add.tileSprite(1072, 144, 48, 128, 'tiles', 34, ground);

	this.game.add.tileSprite(1216, 32, 16, 64, 'tiles', 32, ground);

	var lava = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);

	this.game.add.tileSprite(896, 176, 176, 96, 'tiles', 12, lava);

	this.game.add.tileSprite(464, 208, 96, 64, 'tiles', 12, lava);

	var other = this.game.add.group(this);

	this.game.add.tileSprite(1104, 0, 128, 32, 'tiles', 34, other);

	this.game.add.tileSprite(448, 0, 656, 48, 'tiles', 34, other);

	this.game.add.tileSprite(16, 96, 416, 16, 'tiles', 1, other);

	this.game.add.tileSprite(48, 192, 416, 16, 'tiles', 25, other);

	this.game.add.sprite(32, 192, 'tiles', 33, other);

	this.game.add.sprite(16, 192, 'tiles', 25, other);

	this.game.add.tileSprite(64, 112, 96, 16, 'tiles', 8, other);

	this.game.add.sprite(176, 64, 'tiles', 33, other);

	this.game.add.tileSprite(288, 112, 96, 16, 'tiles', 8, other);

	this.game.add.sprite(304, 96, 'tiles', 33, other);

	this.game.add.tileSprite(448, 80, 80, 16, 'tiles', 1, other);

	this.game.add.sprite(448, 96, 'tiles', 8, other);

	this.game.add.sprite(480, 96, 'tiles', 8, other);

	this.game.add.sprite(528, 80, 'tiles', 3, other);

	this.game.add.sprite(560, 144, 'tiles', 24, other);

	this.game.add.tileSprite(560, 160, 16, 112, 'tiles', 32, other);

	this.game.add.tileSprite(576, 144, 304, 16, 'tiles', 25, other);

	this.game.add.tileSprite(720, 64, 160, 16, 'tiles', 8, other);

	this.game.add.sprite(544, 64, 'tiles', 1, other);

	this.game.add.tileSprite(560, 64, 112, 16, 'tiles', 2, other);

	this.game.add.sprite(880, 144, 'tiles', 27, other);

	this.game.add.tileSprite(880, 160, 16, 112, 'tiles', 35, other);

	this.game.add.sprite(912, 48, 'tiles', 3, other);

	this.game.add.tileSprite(928, 32, 160, 16, 'tiles', 2, other);

	this.game.add.tileSprite(976, 48, 96, 16, 'tiles', 8, other);

	this.game.add.sprite(1072, 144, 'tiles', 24, other);

	this.game.add.tileSprite(1088, 144, 32, 16, 'tiles', 26, other);

	this.game.add.sprite(1120, 128, 'tiles', 24, other);

	this.game.add.sprite(1136, 128, 'tiles', 25, other);

	this.game.add.sprite(1152, 112, 'tiles', 24, other);

	this.game.add.sprite(1184, 96, 'tiles', 24, other);

	this.game.add.sprite(1168, 112, 'tiles', 25, other);

	this.game.add.sprite(1088, 32, 'tiles', 3, other);

	this.game.add.sprite(1200, 96, 'tiles', 26, other);

	this.game.add.tileSprite(1104, 16, 112, 16, 'tiles', 2, other);

	this.game.add.tileSprite(1072, 160, 16, 112, 'tiles', 32, other);

	this.game.add.sprite(320, 176, 'tiles', 17, other);

	this.game.add.sprite(368, 176, 'tiles', 19, other);

	this.game.add.tileSprite(576, 128, 48, 16, 'tiles', 17, other);

	this.game.add.sprite(672, 128, 'tiles', 19, other);

	this.game.add.sprite(688, 128, 'tiles', 17, other);

	this.game.add.sprite(736, 128, 'tiles', 16, other);

	this.game.add.sprite(672, 64, 'tiles', 3, other);

	this.game.add.tileSprite(688, 48, 224, 16, 'tiles', 2, other);

	this.game.add.sprite(752, 128, 'tiles', 17, other);

	this.game.add.sprite(816, 128, 'tiles', 16, other);

	this.game.add.sprite(1072, 128, 'tiles', 19, other);

	this.game.add.sprite(1120, 144, 'tiles', 33, other);

	this.game.add.tileSprite(864, 0, 32, 16, 'tiles', 33, other);

	this.game.add.tileSprite(448, 48, 240, 16, 'tiles', 34, other);

	this.game.add.tileSprite(448, 64, 96, 16, 'tiles', 34, other);

	this.game.add.sprite(1136, 32, 'tiles', 8, other);

	this.game.add.sprite(1184, 32, 'tiles', 8, other);

	this.game.add.tileSprite(768, 16, 32, 16, 'tiles', 33, other);

	this.game.add.sprite(816, 32, 'tiles', 33, other);

	this.game.add.sprite(944, 16, 'tiles', 33, other);

	this.game.add.tileSprite(1040, 0, 16, 32, 'tiles', 33, other);

	this.game.add.tileSprite(464, 192, 96, 16, 'tiles', 4, other);

	this.game.add.sprite(480, 192, 'tiles', 5, other);

	this.game.add.sprite(512, 192, 'tiles', 5, other);

	this.game.add.tileSprite(896, 160, 176, 16, 'tiles', 4, other);

	this.game.add.sprite(928, 160, 'tiles', 5, other);

	this.game.add.sprite(960, 160, 'tiles', 5, other);

	this.game.add.sprite(1008, 160, 'tiles', 5, other);

	this.game.add.sprite(1056, 160, 'tiles', 5, other);

	this.game.add.sprite(432, 96, 'tiles', 3, other);

	var player = this.game.add.sprite(32, 128, 'player', 5, this);
	
	var bleed = this.game.add.sprite(64, 64, 'bloodhitSmall', 10, this);
	bleed.animations.add("bleed", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, false);
	
	player.anchor.setTo(0.5, 0.0);
	player.animations.add('walk', [0, 1, 2, 1], 4, true);
	player.animations.add('jump', [4], 60, false);
	player.animations.add('stay', [5], 60, false);
	player.animations.add('die', [7], 2, false);
	this.game.physics.arcade.enable(player);

	var enemies = this.game.add.group(this);

	var enemies2 = this.game.add.sprite(224, 176, 'enemies', 0, enemies);
	enemies2.anchor.setTo(0.5, 0.0);
	enemies2.animations.add('walk', [0, 1, 2], 7, true);
	this.game.physics.arcade.enable(enemies2);
	enemies2.body.velocity.x = -50.0;
	enemies2.data = {
		 left: 80,
		 right: 432
		};

	var enemies1 = this.game.add.sprite(576, 128, 'enemies', 0, enemies);
	enemies1.anchor.setTo(0.5, 0.0);
	enemies1.animations.add('walk', [0, 1, 2], 7, true);
	this.game.physics.arcade.enable(enemies1);
	enemies1.body.velocity.x = 100.0;
	enemies1.data = {
		 left: 570,
		 right: 880
		};

	var healthRestore = this.game.add.sprite(880, 130, 'items', 13, this);
	var levelToggle = this.game.add.sprite(1200, 50, 'items', 3, this);
	
	healthRestore.anchor.setTo(0.5, 0.0);
	this.game.physics.arcade.enable(healthRestore);
	
	levelToggle.anchor.setTo(0.5, 0.0);
	this.game.physics.arcade.enable(levelToggle);
	
	var healthMeter = this.game.add.sprite(32, 16, 'meter', 5, this);

	 // public fields

	this.fGround = ground;
	this.fLava = lava;
	this.fPlayer = player;
	this.fEnemies = enemies;
	this.fBleed = bleed;
	this.healthMeter = healthMeter;
	this.healthRestore = healthRestore;
	this.levelToggle = levelToggle;
	
	/* --- post-init-begin --- */

	// insert post init code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Phaser.Group;


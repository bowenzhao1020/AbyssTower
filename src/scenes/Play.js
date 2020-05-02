class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        // load sprites
        this.load.image('player', './assets/Player.png');
        this.load.image('platform', './assets/Platform.png');
    }
    create(){

        //player added
        this.player = new Player(this, centerX, centerY, 'player').setOrigin(0.5, 0.5);

        //set a group for all platform to be detected
        // platforms = this.physics.add.group({
        //     key: 'platform',
        //     velocityX: 0,
        //     velocityY: 0,
        //     gravityY: game.config.physics.arcade.gravity.y,
        // });

        this.platform01 = new Platform(this, 200, 600, 'platform').setOrigin(0.5, 0.5);
        this.platform02 = new Platform(this, 450, 600, 'platform').setOrigin(0.5, 0.5);
        this.platform03 = new Platform(this, 700, 600, 'platform').setOrigin(0.5, 0.5);
        this.platform04 = new Platform(this, 1000, 600, 'platform').setOrigin(0.5, 0.5);
        
        // player physics activate
        this.physics.add.existing(this.player);
        this.player.body.collideWorldBounds = true;

        //platform physics activate
        this.physics.add.existing(this.platform01);
        this.platform01.body.setImmovable(true);
        this.platform01.body.onCollide = true;

        this.physics.add.existing(this.platform02);
        this.platform02.body.setImmovable(true);
        this.platform02.body.onCollide = true;

        this.physics.add.existing(this.platform03);
        this.platform03.body.setImmovable(true);
        this.platform03.body.onCollide = true;

        this.physics.add.existing(this.platform04);
        this.platform04.body.setImmovable(true);
        this.platform04.body.onCollide = true;
    

        //define input keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        //update player movement
        this.player.update();

        this.platform01.update();
        this.platform02.update();
        this.platform03.update();
        this.platform04.update();

        //collision between player and platform
        this.physics.collide(this.platform01, this.player);
        this.physics.collide(this.platform01, this.platform02);
        this.physics.collide(this.platform01, this.platform03);
        this.physics.collide(this.platform01, this.platform04);
        this.physics.collide(this.platform02, this.player);
        this.physics.collide(this.platform02, this.platform03);
        this.physics.collide(this.platform02, this.platform04);
        this.physics.collide(this.platform03, this.player);
        this.physics.collide(this.platform03, this.platform04);
        this.physics.collide(this.platform04, this.player);
    }
}
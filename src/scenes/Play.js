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

        this.platform = new Platform(this, centerX, centerY + 300, 'platform').setOrigin(0.5, 0.5);
        
        // player physics activate
        this.physics.add.existing(this.player);
        this.player.body.collideWorldBounds = true;

        //platform physics activate
        this.physics.add.existing(this.platform);
        this.platform.body.setImmovable(true);
        this.platform.body.onCollide = true;
    

        //define input keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        //update player movement
        this.player.update();
        this.platform.update();

        //collision between player and platform
        this.physics.collide(this.platform, this.player);
    }
}
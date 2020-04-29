class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        // load sprites
        this.load.image('player', './assets/Player.png');
    }
    create(){

        //player added
        this.player = new Player(this, game.config.width/2, game.config.height/2, 'player').setOrigin(0.5, 0.5);
        
        // player physics activate
        this.physics.add.existing(this.player);
        this.player.body.collideWorldBounds = true;
    

        //define input keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        //update player movement
        this.player.update();
    }
}
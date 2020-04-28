class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        // load sprites
        this.load.image('player', './assets/Player.png');
    }
    create(){

        this.add.text(game.config.width/2, game.config.height/2, "goodbye world").setOrigin(0.5);
        
    }
}
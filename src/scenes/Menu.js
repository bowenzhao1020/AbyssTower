class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
        // all the image of menu goes here
        this.load.image('gamePic', './assets/Menu.png');
    }

    create(){
        //test placement for title screen
        this.gamePic = this.add.tileSprite(0, 0, 480, 640, 'gamePic').setOrigin(0, 0);
    }


}
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
        this.gamePic = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'gamePic').setOrigin(0, 0);

        //menu display
        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '50px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // information display
        let infoConfig = {
            fontFamily: 'Arial',
            fontSize: '25px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(centerX, centerY - 220, 'Hell Tower', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 150, 'Press Space Key To Start', infoConfig).setOrigin(0.5);

        //space key scene change
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){

        if(this.key.isDown){
            this.scene.start("instruScene");
        }
    }

}
class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
        // all the image of menu goes here
        this.load.image('gamePic', './assets/Menu.png');

        //load audio
        this.load.audio('mainBgm', './assets/mainBGM.mp3');
        this.load.audio('click', './assets/click.wav');
        this.load.audio('jump', './assets/jump.mp3');
        this.load.audio('death', './assets/death.mp3');
    }

    create(){

        //bgm start play
        this.mainBgm = this.sound.add('mainBgm', {
            mute: false,
            volume: 0.5,
            rate: 1,
            loop: true
        });
        this.mainBgm.play();
        //test placement for title screen
        this.gamePic = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'gamePic').setOrigin(0, 0);

        //menu display
        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '50px',
            color: '#000000',
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

        this.add.text(centerX, centerY - 300, 'Hell Tower', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 300, 'Press Space Key To Start', infoConfig).setOrigin(0.5);

        //space key scene change
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){

        if(this.key.isDown){
            this.mainBgm.stop();
            this.sound.play('click');
            this.scene.start("instruScene");
        }
    }

}
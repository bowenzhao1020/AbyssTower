class Instru extends Phaser.Scene{
    constructor(){
        super("instruScene");
    }

    preload(){
        // load image/tile sprite
        this.load.image('monster', './assets/Monster.png');
        this.load.image('watch', './assets/Watch.png');
    }

    create(){

        //instruction display
        let titleConfig = {
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
        let instruConfig = {
            fontFamily: 'Arial',
            fontSize: '30px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(centerX, 80, 'Instruction!', titleConfig).setOrigin(0.5);

        this.add.text(centerX, 150, 'Press ← and → to move around', instruConfig).setOrigin(0.5);
        this.add.text(centerX, 200, 'Press space bar to jump', instruConfig).setOrigin(0.5);

        this.add.text(centerX, 300, 'Press Space to Escape from HELLLLL', instruConfig).setOrigin(0.5);

        //space key scene change
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(this.key.isDown){
            this.sound.play('click');
            this.scene.start("playScene");
        }
    }
}
class Over extends Phaser.Scene{
    constructor(){
        super("overScene");
    }

    preload(){
    
        //load audio
        this.load.audio('click', './assets/click.wav');

    }
    create(){

        //instruction display
        let titleConfig = {
            fontFamily: 'Arial',
            fontSize: '100px',
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
            fontSize: '50px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }


        this.add.text(centerX, 300, 'You Are Dead', titleConfig).setOrigin(0.5);

        this.add.text(centerX, 600, 'Click space to try again', instruConfig).setOrigin(0.5);
        this.add.text(centerX, 650, 'Click esc to return to main menu', instruConfig).setOrigin(0.5);

        //scene change key setting

        this.continue = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.mainMenu = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);



    }

    update(){
        
        if(Phaser.Input.Keyboard.JustDown(this.continue)){
            this.sound.play('click');
            this.scene.start("playScene");
        }

        if(Phaser.Input.Keyboard.JustDown(this.mainMenu)){
            this.sound.play('click');
            this.scene.start("menuScene");
        }
    }
}
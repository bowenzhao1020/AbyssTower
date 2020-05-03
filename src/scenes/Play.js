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

        //platform sprite added
        this.platform01 = new PlatformL(this, 115, 570, 'platform').setOrigin(0.5, 0.5);
        this.platform02 = new PlatformL(this, 270, 340, 'platform').setOrigin(0.5, 0.5);
        this.platform03 = new PlatformL(this, 388, 100, 'platform').setOrigin(0.5, 0.5);
        this.platform04 = new PlatformC(this, 400, 780, 'platform').setOrigin(0.5, 0.5);
        this.platform05 = new PlatformC(this, 590, 480, 'platform').setOrigin(0.5, 0.5);
        this.platform06 = new PlatformC(this, 620, 270, 'platform').setOrigin(0.5, 0.5);
        this.platform07 = new PlatformR(this, 940, 200, 'platform').setOrigin(0.5, 0.5);
        this.platform08 = new PlatformR(this, 980, 500, 'platform').setOrigin(0.5, 0.5);
        this.platform09 = new PlatformR(this, 1010, 650, 'platform').setOrigin(0.5, 0.5);
        
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
        
        this.physics.add.existing(this.platform05);
        this.platform05.body.setImmovable(true);
        this.platform05.body.onCollide = true;

        this.physics.add.existing(this.platform06);
        this.platform06.body.setImmovable(true);
        this.platform06.body.onCollide = true;

        this.physics.add.existing(this.platform07);
        this.platform07.body.setImmovable(true);
        this.platform07.body.onCollide = true;

        this.physics.add.existing(this.platform08);
        this.platform08.body.setImmovable(true);
        this.platform08.body.onCollide = true;

        this.physics.add.existing(this.platform09);
        this.platform09.body.setImmovable(true);
        this.platform09.body.onCollide = true;
    

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
        this.platform05.update();
        this.platform06.update();
        this.platform07.update();
        this.platform08.update();
        this.platform09.update();

        //collision between player and platform
        this.physics.collide(this.platform01, this.player);
        this.physics.collide(this.platform02, this.player);
        this.physics.collide(this.platform03, this.player);
        this.physics.collide(this.platform04, this.player);
        this.physics.collide(this.platform05, this.player);
        this.physics.collide(this.platform06, this.player);
        this.physics.collide(this.platform07, this.player);
        this.physics.collide(this.platform08, this.player);
        this.physics.collide(this.platform08, this.player);
        this.physics.collide(this.platform09, this.player);

        //collision check between platforms and reset x position on collide
        if( this.physics.collide(this.platform01, this.platform02)){
            this.platform02.reset();
        }
        if( this.physics.collide(this.platform01, this.platform03)){
            this.platform03.reset();
        }
        if( this.physics.collide(this.platform01, this.platform04)){
            this.platform04.reset();
        }
        if( this.physics.collide(this.platform01, this.platform05)){
            this.platform05.reset();
        }
        if( this.physics.collide(this.platform01, this.platform06)){
            this.platform06.reset();
        }
        if( this.physics.collide(this.platform01, this.platform07)){
            this.platform07.reset();
        }
        if( this.physics.collide(this.platform01, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform01, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform02, this.platform03)){
            this.platform03.reset();
        }
        if( this.physics.collide(this.platform02, this.platform04)){
            this.platform04.reset();
        }
        if( this.physics.collide(this.platform02, this.platform05)){
            this.platform05.reset();
        }
        if( this.physics.collide(this.platform02, this.platform06)){
            this.platform06.reset();
        }
        if( this.physics.collide(this.platform02, this.platform07)){
            this.platform07.reset();
        }
        if( this.physics.collide(this.platform02, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform02, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform03, this.platform04)){
            this.platform04.reset();
        }
        if( this.physics.collide(this.platform03, this.platform05)){
            this.platform05.reset();
        }
        if( this.physics.collide(this.platform03, this.platform06)){
            this.platform06.reset();
        }
        if( this.physics.collide(this.platform03, this.platform07)){
            this.platform07.reset();
        }
        if( this.physics.collide(this.platform03, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform03, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform04, this.platform05)){
            this.platform05.reset();
        }
        if( this.physics.collide(this.platform04, this.platform06)){
            this.platform06.reset();
        }
        if( this.physics.collide(this.platform04, this.platform07)){
            this.platform07.reset();
        }
        if( this.physics.collide(this.platform04, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform04, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform05, this.platform06)){
            this.platform06.reset();
        }
        if( this.physics.collide(this.platform05, this.platform07)){
            this.platform07.reset();
        }
        if( this.physics.collide(this.platform05, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform05, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform06, this.platform07)){
            this.platform07.reset();
        }
        if( this.physics.collide(this.platform06, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform06, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform07, this.platform08)){
            this.platform08.reset();
        }
        if( this.physics.collide(this.platform07, this.platform09)){
            this.platform09.reset();
        }
        if( this.physics.collide(this.platform08, this.platform09)){
            this.platform09.reset();
        }
    }
}
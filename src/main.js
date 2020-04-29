let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 500,
            }
        }
    },
    scene: [ Menu, Instru, Play, Over ],
};

let game = new Phaser.Game(config);

// reserve keyboard value
let keySPACE, keyLEFT, keyRIGHT;

// global event
let centerX = game.config.width/2;
let centerY = game.config.height/2;
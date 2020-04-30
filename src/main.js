let config = {
    type: Phaser.AUTO,
    width: 3508/3,
    height: 2480/3,
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
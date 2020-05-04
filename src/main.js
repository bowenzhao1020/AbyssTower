let config = {
    type: Phaser.CANVAS,
    width: 3508/3,
    height: 2480/3,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                y: 5000,
            }
        }
    },
    scene: [ Menu, Instru, Play, Over ],
};

let game = new Phaser.Game(config);

// reserve keyboard value
let keySPACE, keyLEFT, keyRIGHT;

//variable for checking speed
let score = 0;
//variable for increase speed at a certain score
let spdChk = 0;

// global event
let centerX = game.config.width/2;
let centerY = game.config.height/2;

// check game over
let gameOver = false;
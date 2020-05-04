// collaborator names:
    // Bowen Zhao                   as programmer
    // Elvis Nyguyen                as artist
    // Matthew WhiteHouse
// game title:
    // Abyss Tower
// date completed:
    // 4/3/2020
// creative tilt justification:
    // I supposed our game is challenging and more about challengling on the luck side, the random spawned platform will determine how long you can survive in this abyss
    // Im prouded of our game on programming side, I did learn a lot beyond the original tutorial we did in class, a lot of new coding functions and logic
    // Title screen art, and the main menu bgm choice are the best two things I liked among all the assets.
    //
    // In this project, the random platform spawning on top of the screen and avoid overlap on other sprites, at the same time, spawn in a small range for player to reach
    // are the design that took me a lot of time to figure out


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
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 905,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);
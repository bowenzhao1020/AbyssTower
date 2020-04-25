let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 1280,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);
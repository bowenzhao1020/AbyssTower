let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Menu, Instru, Play ],
};

let game = new Phaser.Game(config);
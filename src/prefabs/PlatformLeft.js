// js file for platform object
class PlatformL extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);
    }

    update(){

        //initiate velocity : maybe implement random x movement later version
        this.body.velocity.x = 0;
        //velocity used for platform falling
        this.body.velocity.y = 0;
        //use to increase the dropping down speed of platform
        this.body.y += 0;

        this.body.gravity.y = 0;
       
        if(this.y > game.config.height + 49){
            this.reset();
        }
    }

    // condition for player restart the game
    reset() {
        this.x = Math.floor(Math.random() * (centerX - 94 + 1)) + 94;
        this.y = Math.floor(Math.random() * (0 + 50 + 1)) - 50;
    }
}
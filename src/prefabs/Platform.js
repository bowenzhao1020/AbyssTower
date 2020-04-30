// js file for platform object
class Platform extends Phaser.Physics.Arcade.Sprite{
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
        //seperate gravity calculation for platform falling, can be adjust later for increasing speed over time
        this.body.gravity.y = 5000;
       
        if(this.y > game.config.height){
            this.reset();
        }
    }

    // condition for player restart the game
    reset() {
        this.x = Math.floor(Math.random() * ((game.config.width - 94) - 94 + 1)) + 94;
        this.y = 0 - 200;
    }
}
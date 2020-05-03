// js file for platform object
class PlatformL extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        //between function for spawn range
        function between(min, max){
            return Math.floor( Math.random() * (max - min + 1) + min);
        }
    }

    update(){

        //initiate velocity : maybe implement random x movement later version
        this.body.velocity.x = 0;
        //velocity used for platform falling
        this.body.velocity.y = 0;
        //use to increase the dropping down speed of platform
        this.body.y += 0;
       
        if(this.y > game.config.height + 49){
            this.reset();
        }
    }

    // condition for platform constant rolling from top
    reset() {
        this.x = Math.floor( Math.random() * (389 - 88 + 1) + 88);
        this.y = 0;
    }
}
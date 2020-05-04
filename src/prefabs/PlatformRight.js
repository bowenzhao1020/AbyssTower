// js file for platform object
class PlatformR extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.spdUp = 0;
        this.isUp = false;
    }

    update(){

        //initiate velocity : maybe implement random x movement later version
        this.body.velocity.x = 0;
        //velocity used for platform falling
        this.body.velocity.y = 0 + this.spdUp;
        
        // //use to increase the dropping down speed of platform
        if(score != 0 && score%100 == 0){
            if(this.isUp == false){
                //console.log(this.spdUp);
                this.spdUp += 100;
                this.isUp = true;
                //console.log(this.spdUp);
            }
        }
        else if(score%100 != 0){
            this.isUp = false;
        }
       
        // reset condition
        if(this.y > game.config.height + 49){
            this.reset();
            score += 5;
        }
    }

    // condition for platform constant rolling from top
    reset() {
        this.x = Math.floor( Math.random() * (1080 - 779 + 1) + 779);
        this.y = 0;
    }
}
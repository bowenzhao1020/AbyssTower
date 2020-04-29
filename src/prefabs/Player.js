// js file for player object
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);
    }

    update(){

        //initiate velocity
        this.body.velocity.x = 0;
        
        //check mid air status
        this.standing = this.body.blocked.down || this.body.touching.down;


        //left&right movement
        if(keyLEFT.isDown){
            this.body.velocity.x -= 400;
        }else if(keyRIGHT.isDown){
            this.body.velocity.x += 400;
        }

        //jump bar
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && this.standing){
            this.body.velocity.y = -400;
        }
    }

    // condition for player restart the game
    reset() {

    }
}
// js file for player object
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);
        // check if jumping in mid air status
        this.isJumping = false;
    }

    update(){
        //initiate velocity
        this.body.velocity.x = 0;
        //left&right movement
        if(keyLEFT.isDown){
            this.body.velocity.x -= 400;
        }else if(keyRIGHT.isDown){
            this.body.velocity.x += 400;
        }

        //jump bar
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.isJumping){
            this.isJumping = true;
        }
        if(this.isJumping){
            this.body.velocity.y = -400;
            this.isJumping = true;
        }
        
        this.reset();
    }

    // condition for player restart the game
    reset() {
        this.isJumping = false;
    }
}
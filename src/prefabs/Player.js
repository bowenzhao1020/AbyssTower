// js file for player object
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);
        // check if jumping in mid air status
        this.isJumping = false;
        this.jumpHeight = 0;
    }

    update(){
        //left&right movement
        if(keyLEFT.isDown){
            this.x -= 4;
        }else if(keyRIGHT.isDown){
            this.x += 4;
        }

        //jump bar
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.isJumping){
            this.isJumping = true;
        }
        if(this.isJumping){
            this.y -= 3;
        }
    }

    // condition for player restart the game
    reset() {
        this.isJumping = false;
    }
}
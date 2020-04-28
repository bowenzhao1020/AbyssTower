// js file for player object
class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);
        // check if jumping in mid air status
        this.isJumping = false;
    }

    update(){
        //left&right movement
        if(keyLEFT.isDown){
            this.x -= 5;
        }else if(keyRIGHT.isDown){
            this.x += 5;
        }

        //jump bar
        
    }

    // condition for player restart the game
    reset() {
        this.isJumping = false;
    }
}
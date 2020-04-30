// js file for player object
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);
        this.jumpOk = false;
    }

    update(){

        //initiate velocity
        this.body.velocity.x = 0;
        //velocity used for faster falling down
        this.body.velocity.y += 10;
        //check mid air status
        this.standing = this.body.blocked.down || this.body.touching.down;
        //check jump avaliability
        if(this.standing){
            this.jumpOk = true;
        }


        //left&right movement
        if(keyLEFT.isDown){
            this.body.velocity.x -= 400;
        }else if(keyRIGHT.isDown){
            this.body.velocity.x += 400;
        }

        //jump movement
        if(this.jumpOk == true){
            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.body.velocity.y = -900;
            }
            this.jumpOk = false;
        }

        
    }

    // condition for player restart the game
    reset() {

    }
}
// js file for player object
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.jumpOk = false;

        //jump sound effect
        this.sfxJump = scene.sound.add('jump');
    }

    update(){

        //initiate velocity
        this.body.velocity.x = 0;
        //velocity used for faster falling down
        this.body.velocity.y += 0;
        //check jump avaliability
        if(this.body.touching.down){
            this.jumpOk = true;
        }


        //left&right movement
        if(keyLEFT.isDown){
            this.body.velocity.x -= 500;
        }else if(keyRIGHT.isDown){
            this.body.velocity.x += 500;
        }

        //jump movement
        if(this.jumpOk == true){
            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.body.velocity.y = -1800;
                this.sfxJump.play();
            }
            this.jumpOk = false;
        }

        
    }

    // condition for player restart the game
    reset() {

    }
}
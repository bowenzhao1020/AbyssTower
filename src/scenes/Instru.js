class Instru extends Phaser.Scene{
    constructor(){
        super("instruScene");
    }

    create(){

        this.add.text(20, 20, "goodbye world");
        
    }
}
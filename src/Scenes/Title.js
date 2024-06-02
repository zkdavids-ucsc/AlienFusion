class Title extends Phaser.Scene{

    constructor(){
        super("TitleScreen");
        this.text1;
        this.text2;
    }

    preload(){

    }

    create(){
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.text1 = this.add.text(game.config.width/2, game.config.height/2 - 50, "Alien Fusion",
        {
            fontSize: 64,
            fontFamily: 'Patrick Hand SC',
        });
        this.text1.setOrigin(.5, .5);
        this.text2 = this.add.text(game.config.width/2, game.config.height/2 + 75, 
        "Click and drag to move aliens",
        {
            fontSize: 32,
            fontFamily: 'Patrick Hand SC',
        });
        this.text2.setOrigin(.5, .5);

        document.getElementById('description').innerHTML = '<strong>Alien Fusion</strong><br>Click and drag to move aliens'

        // document.getElementById('description').innterHTML = '<h2>Shooter.js</h2><br>A: left, D: right, Space: shoot'
    }

    update(){
        this.input.on('pointerdown', function (pointer)
        {
            this.scene.start("fusionScene");

        }, this);
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            this.scene.start("fusionScene");
        }
    }
}
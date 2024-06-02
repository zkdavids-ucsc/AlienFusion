class Fusion extends Phaser.Scene {
    constructor() {
        super("fusionScene");
        this.timer = 0;
        this.dragObj;
        // this.prevX = 0;
        // this.prevY = 0;
        // this.currX = 0;
        // this.currY = 0;
    }

    // init() {

    // }

    create() {
        this.beigeArray = [];
        this.blueArray = [];
        this.greenArray = [];
        this.pinkArray = [];
        this.yellowArray = [];
        this.input.on('pointerdown', this.startDrag, this);

        this.pointer = this.input.activePointer;
        
        document.getElementById('description').innerHTML = '<strong>Alien Fusion</strong><br>Click and drag to move aliens'
    }

    startDrag(pointer, targets){
        if(targets){
            this.input.off('pointerdown', this.startDrag, this);
            this.dragObj = targets[0];
            this.input.on('pointermove', this.doDrag, this);
            this.input.on('pointerup', this.stopDrag, this);
        }
    }

    doDrag(pointer){
        if(this.dragObj != null){
            this.dragObj.x = pointer.x;
            this.dragObj.y = pointer.y;
        }
    }

    stopDrag(){
        this.input.on('pointerdown', this.startDrag, this);
        this.input.off('pointermove', this.doDrag, this);
        this.input.off('pointerup', this.stopDrag, this);
        // if(this.dragObj != null){
        //     this.dragObj.setVelocityX((this.currX - this.prevX) * 3);
        //     this.dragObj.setVelocityY((this.currY - this.prevY) * 3);
        // }
    }

    update() {

        this.timer++;
        if((this.timer % 120) == 0){
            this.beigeArray.push(this.physics.add.sprite(
                Math.random() * game.config.width, Math.random() * game.config.height, "beigeAlien"));
        }

        // if(this.timer % 3 == 0){
        //     this.prevX = this.currX;
        //     this.prevY = this.currY;
        //     this.currX = this.pointer.x;
        //     this.currY = this.pointer.y;
        // }

        this.beigeArray = this.beigeArray.filter((alien) => alien.y > -(alien.displayHeight/2));
        this.blueArray = this.blueArray.filter((alien) => alien.y > -(alien.displayHeight/2));
        this.greenArray = this.greenArray.filter((alien) => alien.y > -(alien.displayHeight/2));
        this.pinkArray = this.pinkArray.filter((alien) => alien.y > -(alien.displayHeight/2));
        this.yellowArray = this.yellowArray.filter((alien) => alien.y > -(alien.displayHeight/2));

        for(let alien of this.beigeArray){
            alien.setInteractive();
            for(let other of this.beigeArray){
                if(this.collides(alien, other) && !this.pointer.isDown){
                    this.blueArray.push(this.physics.add.image(alien.x, alien.y, "blueAlien"));
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 500,
                        lifespan: 500,
                        speed: 400,
                        tint: 0x8F8FFF,
                        quantity: 5,
                        stopAfter: 50,
                        alpha: {start: .85, end: .1}
                    })
                    // alien.setVelocity(0, 0);
                    // other.setVelocity(0, 0);
                    alien.y = -500;
                    other.y = -300;
                    this.sound.play("score");
                }
            }
        }

        for(let alien of this.blueArray){
            alien.setInteractive();
            alien.setScale(1.25);
            for(let other of this.blueArray){
                if(this.collides(alien, other) && !this.pointer.isDown){
                    this.greenArray.push(this.physics.add.image(alien.x, alien.y, "greenAlien"));
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 500,
                        lifespan: 800,
                        speed: 400,
                        tint: 0x8FEF8F,
                        quantity: 5,
                        stopAfter: 70,
                        alpha: {start: .85, end: .1}
                    })
                    // alien.setVelocity(0, 0);
                    // other.setVelocity(0, 0);
                    alien.y = -500;
                    other.y = -300;
                    this.sound.play("score");
                }
            }
        }
        for(let alien of this.greenArray){
            alien.setInteractive();
            alien.setScale(1.5);
            for(let other of this.greenArray){
                if(this.collides(alien, other) && !this.pointer.isDown){
                    this.pinkArray.push(this.physics.add.image(alien.x, alien.y, "pinkAlien"));
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 500,
                        lifespan: 1100,
                        speed: 400,
                        tint: 0xEF8F8F,
                        quantity: 5,
                        stopAfter: 90,
                        alpha: {start: .85, end: .1}
                    })
                    // alien.setVelocity(0, 0);
                    // other.setVelocity(0, 0);
                    alien.y = -500;
                    other.y = -300;
                    this.sound.play("score");
                }
            }
        }
        for(let alien of this.pinkArray){
            alien.setInteractive();
            alien.setScale(1.75);
            for(let other of this.pinkArray){
                if(this.collides(alien, other) && !this.pointer.isDown){
                    this.yellowArray.push(this.physics.add.image(alien.x, alien.y, "yellowAlien"));
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 500,
                        lifespan: 1500,
                        speed: 400,
                        tint: 0xFFFF8F,
                        quantity: 5,
                        stopAfter: 110,
                        alpha: {start: .85, end: .1}
                    })
                    // alien.setVelocity(0, 0);
                    // other.setVelocity(0, 0);
                    alien.y = -500;
                    other.y = -300;
                    this.sound.play("score");
                }
            }
        }
        for(let alien of this.yellowArray){
            alien.setInteractive();
            alien.setScale(2);
            for(let other of this.yellowArray){
                if(this.collides(alien, other) && !this.pointer.isDown){
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 2000,
                        lifespan: 2000,
                        speed: 400,
                        tint: 0xFF8F8F,
                        quantity: 2,
                        stopAfter: 200,
                        alpha: {start: .85, end: .1}
                    })
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 2000,
                        lifespan: 2000,
                        speed: 400,
                        tint: 0xFFEF8F,
                        quantity: 2,
                        stopAfter: 200,
                        alpha: {start: .85, end: .1}
                    })
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 2000,
                        lifespan: 2000,
                        speed: 400,
                        tint: 0x9FFF9F,
                        quantity: 2,
                        stopAfter: 200,
                        alpha: {start: .85, end: .1}
                    })
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 2000,
                        lifespan: 2000,
                        speed: 400,
                        tint: 0x9F9FFF,
                        quantity: 2,
                        stopAfter: 200,
                        alpha: {start: .85, end: .1}
                    })
                    this.add.particles(alien.x, alien.y, "particle", { 
                        duration: 2000,
                        lifespan: 2000,
                        speed: 400,
                        tint: 0xFF9FEF,
                        quantity: 2,
                        stopAfter: 200,
                        alpha: {start: .85, end: .1}
                    })
                    // alien.setVelocity(0, 0);
                    // other.setVelocity(0, 0);
                    alien.y = -500;
                    other.y = -300;
                    this.sound.play("score");
                }
            }
        
            // for(let alien of this.beigeArray){
            //     if(alien.x > game.config.width+50 || alien.x < -50 || alien.y > game.config.height+50 || alien.y < -50){
            //         alien.destroy();
            //     }
            // }
        }
    }

    collides(a, b) {
        if (Math.abs(a.x - b.x) > (a.displayWidth/2 + b.displayWidth/2)) return false;
        if (Math.abs(a.y - b.y) > (a.displayHeight/2 + b.displayHeight/2)) return false;
        if(a == b) return false;
        return true;
    }

    
}
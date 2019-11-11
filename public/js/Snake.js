export default class Snake {
    constructor(scene){
        this.scene = scene;
// creating a scene property and assigning it the scene we passed to the object
        this.lastMoveTime = 0;
        this.moveInterval = 500;
        this.tileSize = 16;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = []
        
        this.body.push(
            this.scene.add.
            rectangle(
            this.scene.game.config.width / 2,
            this.scene.game.config.height / 2,
            this.tileSize,
            this.tileSize, 
            0xff0000).setOrigin(0)
        ); //makes a small box on the screen. head and tail etc at 0 in array from move()
        this.apple = this.scene.add
        .rectangle(0,0,this.tileSize, this.tileSize, 0x00ff00)
        .setOrigin(0)
        //this.scene.add.rectangle adds the rectangle shaped apple to the screen
        this.postionApple();
        scene.input.keyboard.on('keydown', event => {this.keydown(event)})
        // any time we his a key on the keyboard it calls this event and sends the event
    }

    postionApple(){
        this.apple.x = 
        Math.floor
            (Math.random() * this.scene.game.config.width / this.tileSize) * this.tileSize;
        this.apple.y = 
        Math.floor
            (Math.random() * this.scene.game.config.height / this.tileSize) * this.tileSize;
    // i want a random numeber between 0 and width/height devided by the tile size (16) that should give a float and the math.floor gives an integer. if we times tha tby 16 we know we'll always get a multiple of 16. this keeps snake and apple on the grid(so right against the side and when pass through each other the same)
    }

    keydown(event){
        console.log(event)
        switch(event.keyCode){
            case 37: //left
                this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38: //up
                this.direction = Phaser.Math.Vector2.UP;
                break; 
            case 39: //right
                this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 40: // down
                this.direction = Phaser.Math.Vector2.DOWN;
                break;    
        }
    }

    update(time){
        if(time >= this.lastMoveTime + this.moveInterval){
            this.lastMoveTime = time;
            this.move();
        }
    }
    move(){
        for (let index = this.body.length -1; index >0 ;index--){
            this.body[index].x = this.body[index - 1].x;
            this.body[index].y = this.body[index - 1].y;
        }
        this.body[0].x += this.direction.x * 16;
        this.body[0].y += this.direction.y * 16;
    }
}
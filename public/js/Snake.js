export default class Snake {
    constructor(scene){
        this.scene = scene;
// creating a scene property and assigning it the scene we passed to the object
        this.lastMoveTime = 0;
        this.moveInterval = 500;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = []
        this.body.push(
            this.scene.add.rectangle(0,0,16,16, 0xff0000).setOrigin(0)
        ); //makes a small box on the screen
        this.body.push(
            this.scene.add.rectangle(0,0,16,16, 0x0000ff).setOrigin(0)
        );
        scene.input.keyboard.on('keydown', event => {this.keydown(event)})
        // any time we his a key on the keyboard it calls this event and sends the event
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
        this.body[0].x += this.direction.x * 16;
        this.body[0].y += this.direction.y * 16;
    }
}
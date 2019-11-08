import Snake from './Snake.js'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    create(){
        this.snake = new Snake(this);
        // this is the actual scene itself
    }

    update(time){
       this.snake.update(time)
    }


}
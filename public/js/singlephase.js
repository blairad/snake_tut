const config = {
    width: 640,
    height: 640,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: []
};

new Phaser.Game(config);

//creates a game space witch is height and width. we're using phaser to decide what sorta game space we'll use (phaser is the script in the head tag)
// parent is where it'll place the game. phaser-game is the id of the div in html file. scenes will be defined but we ahve none now so is started with []
// create phaser game and pass it config constant
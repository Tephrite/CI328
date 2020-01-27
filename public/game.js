var game = new Phaser.Game(800, 600, Phaser.AUTO, "",{
	preload: preload,
	create: create,
	update: update
})

function preload () {
	//game.load.tilemap('map1', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('map1', 'maps/map1_world.csv');
    
    game.load.image('tileset', 'assets/tileset.png');
}

var map;
var layer;

function create () {
    
    this.stage.backgroundColor = "#3A5963";
    map = game.add.tilemap("map1");
    map.addTilesetImage('tileset', 'tiles');
    
    layer = map.createLayer(0);
    layer.resizeWorld();
}
function update () {}
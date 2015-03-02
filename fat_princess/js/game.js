///////////////////////
///   Sound Files   ///
///////////////////////

var eatCakeSound = new Audio('cakenom.wav');
var eatCarrotSound = new Audio('ew.wav');

///////////////////////////
///    Game Creation    ///
///////////////////////////

$(document).ready(function() {
  game = new Game(View);
  setInterval(function() { game.loop(); }, 20);

  ['left','right','up','down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.princess.dir = direction;
    });
  });
})

function Game(view) {
  this.view = view
  this.$arena = $('#arena');
  this.$scorebar = $('#scorebar');
  this.princess = new Princess(this.$arena, this.view);
  this.cake = [new Cake(600, 600)];
  this.carrot = [new Carrot(200, 200)];
  this.score = new Score(this.$scorebar);
  this.initalArenaSetup()
}
Game.prototype.initalArenaSetup = function(){
  this.view.setToArena(this.princess, this.view.updateArena);
  this.view.setToArena(this.cake[0], this.view.updateArena);
  this.view.setToArena(this.carrot[0], this.view.updateArena);
}

Game.prototype.loop = function() {
  this.princess.move();
  this.princess.eatCake(this.cake[0],  this.score);
  this.princess.eatCarrot(this.carrot[0],  this.score);
}

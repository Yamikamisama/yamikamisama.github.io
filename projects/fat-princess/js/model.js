
///////////////////
///   Objects   ///
///////////////////

function Princess(arena, view) {
  this.view = view
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() / 2;
  this.dir = "Just sitting there! Get to some cake!!!";
  this.speed = 5;
  this.height = 32;
  this.width = 32;
  this.html = $("<div id='princess'></div>");
}

function Cake(x, y) {
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.html = $("<div class='cake'></div>");
}

function Carrot(x, y) {
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.html = $("<div class='carrot'></div>");
}

function Score(scorebar) {
  this.$scorebar = scorebar;
  this.pounds = 200;
  this.lives = 3;
  this.scoreDisplay();
}
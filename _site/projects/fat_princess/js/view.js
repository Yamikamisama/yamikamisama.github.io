/////////////////////
///    Displays   ///
/////////////////////
var View = {
  setToArena:function(object, callback){
  $("#arena").append(object.html);

  callback(object);
  },

  updateArena: function(element){
  element.html.css('top', element.y - element.height / 2);
  element.html.css('left', element.x - element.width / 2);
  }
};

Score.prototype.scoreDisplay = function() {
  this.$score = $("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>")
  $('#scorebar').append(this.$score);
}

/////////////////////////
///   Score Updates   ///
/////////////////////////

Score.prototype.updateScore = function(){
  $('#score').html("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>");
};

///////////////////////////
///   Grow and shrink   ///
///////////////////////////

Princess.prototype.princessGrow = function () {
  this.height += 20;
  this.width += 20;
  $('#princess').css({height: this.height, width: this.width});
  this.view.updateArena(this)
}

Princess.prototype.princessShrink = function () {
  this.height -= 20;
  this.width -= 20;
  $('#princess').css({height: this.height, width: this.width});
  this.view.updateArena(this)
}

////////////////////////////////
///   Actions for Objects   ///
////////////////////////////////

Princess.prototype.eatCake = function (cake,score) {
  if (Math.sqrt(Math.pow((this.x-cake.x),2)+Math.pow(this.y-cake.y,2)) < (cake.width+this.width)/2)
    {
    eatCakeSound.play();
    cake.x = Math.floor(Math.random() * 600) + 100
    cake.y = Math.floor(Math.random() * 600) + 100//Math.random()*600;
    this.princessGrow();
    this.view.setToArena(cake, this.view.updateArena)
    score.pounds+=100;
    score.updateScore();
    }
}

Princess.prototype.eatCarrot = function (carrot,score) {
  if (Math.sqrt(Math.pow((this.x-carrot.x),2)+Math.pow(this.y-carrot.y,2)) < (carrot.width+this.width)/2)
    {
    eatCarrotSound.play();
    carrot.x = Math.floor(Math.random() * 600) + 100
    carrot.y = Math.floor(Math.random() * 600) + 100
    this.princessShrink();
    score.pounds-=100;
    score.lives-=1;
    if (score.lives==0) {
      alert("Is that the best you can do... She can eat more than that!");
    }
    score.updateScore();
    this.view.setToArena(carrot, this.view.updateArena)
    }
}

//////////////////
///   Bounds   ///
//////////////////

Princess.prototype.inBounds = function () {
  return (this.x > this.width / 2 && this.x < this.$arena.width() - this.width / 2 && this.y > this.height / 2 && this.y < this.$arena.height() - this.height / 2)
}

//////////////////////////////////////////
///   Princess Movement Fuctionality   ///
//////////////////////////////////////////

Princess.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }

  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
    if (! this.inBounds()) {
      if (this.$arena.width() < this.x + (this.width / 2)) {
        this.x = this.$arena.width() - (this.width / 2)
      }

      if ( 0 > this.x - (this.width / 2)) {
        this.x = (this.width / 2)
      }

      if (this.$arena.height() < this.y + (this.height / 2)) {
        this.y = this.$arena.height() - (this.height / 2)
      }

      if ( 0 > this.y - (this.height / 2)) {
        this.y = (this.height / 2)
      }
    }
  }
  this.view.updateArena(this)
}
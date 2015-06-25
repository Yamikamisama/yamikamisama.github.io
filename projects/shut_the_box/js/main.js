(function(){
STB = {

  // Initalize function to set the module to be functional
  init: function(){
    dieTotal = null;
    this.placeTemplate('#stb-game');
    this.messageDisplay();
    this.selectCard();
    this.endTurn();
    this.dieRoll();
    this.endGame();
  },

  // Places HTML template
  placeTemplate: function(element){
    $(element).append('<ul class="cards"><li class="card">1</li><li class="card">2</li><li class="card">3</li><li class="card">4</li><li class="card">5</li><li class="card">6</li><li class="card">7</li><li class="card">8</li><li class="card">9</li></ul><br><button id="end-turn" class="btn">End Turn</button><div class="dice-container"><div class="die"></div><div class="die"></div></div><button id="die-roll" class="btn">Roll</button><button id="end-game" class="btn">End Game</button><div class="win"><h1>Congrats you win!</h1></div><div class="lose"><h1>Sorry you lose :( The game will now reload</h1></div><div class="error"><h1>Incorrect selection, try again</h1></div><div class="success"><h1>Good Move! Keep Going</h1></div>')
  },

  // Rolls the dice and stores the sum of the roll
  // in the dieTotal var
  dieRoll: function(){
    $('#die-roll').click(function() {
      dieTotal = 0;
      $('.die').each(function(){
        var randNum = (Math.floor(Math.random() * 6) + 1)
        var roll = $(this).html('<img src="imgs/dice/die_'+ randNum + '.png" alt="">')
        dieTotal += randNum;
      });
    });
  },

  // Card selection, toggles class card-active
  // Visually changes border to yellow
  selectCard: function(){
    $('.cards').on('click', 'li', function(){
      var active = $(this).hasClass('card-active')
      if(!active){
        $(this).addClass('card-active');
      } else {
        $(this).removeClass('card-active');
      }
    });
  },

  // Updates cards current 'state', removing them if
  // their total % dieTotal = 0, also displays a message
  // to the user updating them on what to do next
  updateCards: function(total){
    if (total % dieTotal === 0){
      // .animate({width:0},1000, function(){$(this).remove()}); << want to add cool remove animation, but glitchy.
      $('.card-active').removeClass('card-active').fadeOut('slow', function(){
        $(this).remove();
      });
      if ( $('.card').length === 0 ) {
        this.messageDisplay('.win');
        STB.reloadGame();
      } else {
        this.messageDisplay('.success');
      }
    } else {
      this.messageDisplay('.error')
    }
  },

  // Ends the current turn and calls updateCards function
  endTurn: function(){
    $('#end-turn').click(function(){
      var $cards = $('.card')
      var holder = []
      $cards.each(function(){
        var active = $(this).hasClass('card-active')
        if (active){
          var item = parseInt($(this).html())
          holder.push(item)
        }
      });
      var total = holder.reduce(function(a, b) {
        return a + b;
      });
      STB.updateCards(total);
    });
  },

  // Calls a message telling the User that they have ended
  // the game and that it will reload
  endGame: function(){
    $('#end-game').click(function() {
      $('.lose').fadeIn('slow', function() {
        STB.reloadGame();
      });
    });
  },

  // Displays Messages based on ClassName
  // .win, .lose, .error, .success
  messageDisplay: function(className){
    $(className).fadeIn('slow', function() {
      setTimeout(function(){
        $(className).fadeOut('slow')
      }, 2000)
    });
  },

  // Refreshes the screen
  reloadGame: function(){
    setTimeout(function(){
      location.reload();
    },2000)
  }
}
  STB.init();
})();

function Player (name){
  this.name = name;
};

  Player.prototype.picks = function(pick){
    this.pick = pick;
  };

function Game (player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};
  
  Game.prototype.winner = function(){
    var defeats = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'};

    if (defeats[this.player1.pick] === this.player2.pick) return this.player1;
    if (this.player1.pick === this.player2.pick) return null;
    return this.player2;
  };
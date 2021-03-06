function Player(name) {
	this.name = name;
};

	Player.prototype.picks = function(pick) {
		this.pick = pick;
	};

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
};

	Game.prototype.DEFEAT = {
			'rock': {scissors: 'crushes', lizard: 'squashes'},
			'paper': {rock: 'covers', spock: 'disproves'},
			'scissors': {paper: 'cuts', lizard: 'decapitates'},
			'spock': {rock: 'vapourises', scissors: 'breaks'},
			'lizard': {spock: 'poisons', paper: 'eats'}
	};

	Game.prototype.winner = function() {
		if (this.player1.pick === this.player2.pick) return null;

			if(this._victoryVerb(this.player1.pick, this.player2.pick)) {
    		return this.player1;
		  }
  		else {
    		return this.player2;
  		}
	};

	Game.prototype._victoryVerb = function(pick, opponentPick) {
		return this.DEFEAT[pick][opponentPick];
	};

	Game.prototype.loser = function() {
  	return (this.winner() === this.player1 ? this.player2 : this.player1);
	};

	Game.prototype.victoryMessage = function(){
		var message;

  	if(this.winner()) {
   		message = [this.winner().name,
    	this._victoryVerb(this.winner().pick, this.loser().pick),
    	this.loser().name].join(' ');
  	}
  	else {
    	message = 'Draw';
  	}

  	return message;
	};

function Computer(name){
	this.name = name
};

	Computer.prototype.strategicChoice = function(playerChoices){
		this.playerChoices = playerChoices

		if (this.playerChoices[0] === 'scissors') {
			this.pick = 'rock';
		}
		else if (this.playerChoices[0] === 'rock') {
			this.pick = 'paper';
		}
		else if (this.playerChoices[0] === 'paper') {
			this.pick = 'scissors';
		}
		else if (this.playerChoices[0] === 'spock') {
			this.pick = 'lizard';
		}
		else if (this.playerChoices[0] === 'lizard') {
			this.pick = 'scissors';
		}
		else {
			var choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
			this.pick = choices[Math.floor(Math.random() * choices.length)];
		}
	};



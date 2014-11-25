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

	Game.prototype.defeat = {
			'rock': ['scissors', 'lizard'],
			'paper': ['rock', 'spock'],
			'scissors': ['paper', 'lizard'],
			'spock': ['rock', 'scissors'],
			'lizard': ['spock', 'paper']
	};

	Game.prototype.winner = function() {
		if (this.player1.pick === this.player2.pick) return null;

			for (var i in this.defeat[this.player1.pick]) {
				if (this.defeat[this.player1.pick][i] === this.player2.pick) {
					return this.player1
				}
			}
		return this.player2;
	};


function Computer(){};

	Computer.prototype.randomChoice = function(){
		var choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
	this.pick = choices[Math.floor(Math.random() * choices.length)];
		
	};
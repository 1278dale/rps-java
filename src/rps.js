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

			array = this.defeat[this.player1.pick]
			for (var i in array) {
				if (array[i] === this.player2.pick) {return this.player1}
			}
		return this.player2;
	};








	// Game.prototype.random = function(){
	// 	var choices = ['rock', 'paper', 'scissors'];
	// 	var choice = choices[Math.floor(Math.random()*choices.length)];
	// };
$(document).ready(function(){
      var player = new Player('Dale');
      var matrix = new Computer('The Matrix');
      var game = new Game(player, matrix);

      var render = function(game, picked){
        var html = $('#list-item-template').html();
        var data = { message: game.victoryMessage(), "picked": picked }
        return Mustache.render(html,data);
      };

      var itemClicked = function(){
        var picked = $(this).data('pick');
        player.picks(picked);
        var playerChoices = $.map($("#results").children(), function(li, i) {
          return $(li).data('playerchoice');
        });
        matrix.strategicChoice(playerChoices);
        console.log(playerChoices);
        console.log(showResults(game, picked));
      };

      var showResults = function(game, picked){
        $(render(game, picked)).prependTo('#results').slideDown();
        $('li').fadeOut(3000, function(){
          $('li:nth-child(8)').remove();
        });
      };

      $('.choices img').on('click', itemClicked);
        
});
    


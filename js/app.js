var app = angular.module('52cards', ['ngMaterial', 'ngSanitize']);
app.controller('cardsCtrl', function($scope, cardsService) {
  $scope.allCards = cardsService.getAllCards();
});

app.factory('cardsService', function(){
  var factory = {};
  factory.getAllCards = function() {
    var suits = ["clubs", "spades", "hearts", "diams"];
    var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    var allCards = [];
    for (i=0; i < suits.length; i++ ) {
      for (j=0; j < ranks.length; j++) {
        allCards.push({suit: suits[i], rank: ranks[j], symbol: "&"+suits[i]+";"});

      }
    }
    console.log(allCards);
    return allCards;
  };

  factory.shuffle = function(allCards) {
    _shuffle(allCards);
    debugger
    console.log(allCards)
    return allCards;
  }

  return factory;
})

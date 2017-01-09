var app = angular.module('52cards', ['ngMaterial', 'ngSanitize']);
//cards controller
app.controller('cardsCtrl', function($scope, cardsService) {
  $scope.allCards = cardsService.getAllCards();
  $scope.shuffle = function() {
    $scope.allCards = cardsService.shuffle($scope.allCards);
  };
  $scope.ascend = function() {
    $scope.allCards = cardsService.ascend($scope.allCards);
  };
  //flip card here
  $scope.flipCard = function(card) {
    card.flipping = !card.flipping
    console.log(card.flipping)

  }
});

// angular SERVICE
//Cards SERVICE(getAllCards, shuffle, ascend)
//first getAllCards function
app.factory('cardsService', function() {
  var instance = {};

  instance.getAllCards = function() {
    var suits = ["clubs", "spades", "hearts", "diams"];
    var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    var allCards = [];
    for (var i=0; i < suits.length; i++ ) {
      for (var j=0; j < ranks.length; j++) {
        allCards.push({suit: suits[i], rank: ranks[j], symbol: "&"+suits[i]+";", suitsIndex: i, ranksIndex: j});
      }
    };

    return allCards;
  };


  instance.shuffle = function(allCards) {
    return _.shuffle(allCards)
  };

  // Ascend the cards by the order of ["clubs", "spades", "hearts", "diams"]
  instance.ascend = function(allCards) {
    var clubs = _.sortBy(_.where(allCards, {suit: "clubs"}), "ranksIndex");
    var spades = _.sortBy(_.where(allCards, {suit: "spades"}), "ranksIndex");
    var hearts = _.sortBy(_.where(allCards, {suit: "hearts"}), "ranksIndex");
    var diams = _.sortBy(_.where(allCards, {suit: "diams"}), "ranksIndex");

    return allCards = clubs.concat(spades, hearts, diams);
  };

  return instance;
});

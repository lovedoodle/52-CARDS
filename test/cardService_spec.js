console.log("Running Card Service Spec");

describe('cardsService', function(){
  var cardsService;
  beforeEach(function() {
    module('52cards');
    inject(function(_cardsService_) {
      cardsService = _cardsService_;
    });
  });

  it("should return 52 cards", function() {
    expect(cardsService.getAllCards().length).toBe(52);

  });

  it('should return 52 cards in default ascending order', function() {
    var firstCard = cardsService.getAllCards()[0];
    var lastCard = cardsService.getAllCards()[51];
    expect(firstCard.suit).toBe('clubs');
    expect(firstCard.rank).toBe('A')
    expect(lastCard.suit).toBe('diams');
    expect(lastCard.rank).toBe('K')
  });

  it("should shuffle the cards", function() {
    var beforeShuffle = cardsService.getAllCards();
    var afterShuffle = cardsService.shuffle(beforeShuffle);
    expect(beforeShuffle[0]).not.toEqual(afterShuffle[0]);
  });

  it('should ascend the cards back to the default order', function() {
    var beforeShuffle = cardsService.getAllCards();
    var afterShuffle = cardsService.shuffle(beforeShuffle);
    var ascendCards = cardsService.ascend(afterShuffle);
    var firstCard = ascendCards[0];
    var lastCard = ascendCards[51];
    expect(firstCard.suit).toBe('clubs');
    expect(firstCard.rank).toBe('A')
    expect(lastCard.suit).toBe('diams');
    expect(lastCard.rank).toBe('K')
  })


});

'use strict';
describe('javascript', function() {
  beforeEach(function(){
    turn = 0;
  })

  describe( "#attachListeners", function() {
    it("should attach event listeners which call your turn function when someone clicks on a square", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      var selector = '[data-x="0"][data-y="0"]'
      spyOn(window, "doTurn")
      $(selector).click()
      expect(window.doTurn).toHaveBeenCalled()
    });     
  });

  // This spec is  bit vague. I could get it pass pretty easily without fleshing out all the functionality. Maybe expect turn to be incremented by one.
  describe( "#doTurn", function() {
    it("should create an array of 9 empty values", function() {
      spyOn(window, "checkWinner");
      spyOn(window, "updateState");
      doTurn()
      expect(turn).toEqual(1)
      expect(window.updateState).toHaveBeenCalled
      expect(window.checkWinner).toHaveBeenCalled
    });     
  });

  // The board isn't keeping track of its state in this iteration. The only thing keeping track is the html.
  describe( "#updateState", function() {
    it("should add the mark of the player that moved into the correct index in the array and tell the board to update its state", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      expect($(selector).html()).toEqual("X")
    });     
  });

  describe( "#player", function() {
    it("should return the mark of the current player", function() {
      expect(player()).toEqual("X")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      spyOn(window, "updateState");
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      var selector = '[data-x="0"][data-y="1"]'
      $(selector).click()
      expect(checkWinner()).toEqual(false)   
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (vertical)", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      spyOn(window, "message");
      // x goes
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="1"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="0"][data-y="1"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="2"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="0"][data-y="2"]'
      $(selector).click()
      expect(window.message).toHaveBeenCalledWith("Player X Won!")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (diagonal)", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      spyOn(window, "message");
      // x goes
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="1"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="1"][data-y="1"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="2"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="2"][data-y="2"]'
      $(selector).click()
      expect(window.message).toHaveBeenCalledWith("Player X Won!")    });     
  });

});
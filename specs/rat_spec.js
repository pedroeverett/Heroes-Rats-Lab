var Rat = require("../rat.js");
var Food = require("../food.js");
var assert = require("assert");

describe("Rat", function() {

  var rat = new Rat("Wee Mouse");
  var food = new Food("Cookie", 10);

  it("can touch food became poisonous", function() {
    rat.touchFood(food);
    assert.equal(food.repValue, -10)
  })
})
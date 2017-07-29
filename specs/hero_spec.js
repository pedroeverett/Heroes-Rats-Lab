var Hero = require("../hero.js");
var Food = require("../food.js");
var Task = require("../task.js");
var assert = require("assert");

describe("Hero", function() {

  var hero;
  var food1;
  var food2;
  var food3;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {

    hero = new Hero("Red", 100, "Red Peppers", "Yummyy");
    food1 = new Food("Cookie", 10);
    food2 = new Food("IceCream", 30);
    food3 = new Food("Chicken", 5);
    task1 = new Task(1,5, "Ballon", true);
    task2 = new Task(10,1, "Puppy", false);
    task3 = new Task(5,10, "Medal", false);
  })

  it("does hero have a name", function() {
    assert.equal(hero.name, "Red")
  }),

  it("health starts at 100", function() {
    assert.equal(hero.health, 100)
  })




})
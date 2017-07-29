var Hero = require("../hero.js");
var Food = require("../food.js");
var Task = require("../task.js");
var Rat = require("../rat.js");
var assert = require("assert");

describe("Hero", function() {

  var hero;
  var food1;
  var food2;
  var food3;
  var task1;
  var task2;
  var task3;
  var rat;

  beforeEach(function() {

    hero = new Hero("Red", 100, "Red Peppers", "My name is ");
    food1 = new Food("Cookie", 10);
    food2 = new Food("Red Peppers", 30);
    food3 = new Food("Chicken", 5);
    task1 = new Task(1, 5, 5, true);
    task2 = new Task(10, 1, 8, false);
    task3 = new Task(5, 10, 10, false);
    rat = new Rat("Wee Mouse");

  })

  it("does hero have a name", function() {
    assert.equal(hero.name, "Red");
  }),

  it("health starts at 100", function() {
    assert.equal(hero.health, 100);
  }),

  it("can talk saying his name", function() {
    assert.equal(hero.sayName(), "My name is Red");
  }),

  it("taskList starts empty", function() {
    assert.equal(hero.numberTasks(), 0);
  }),

  it("can eat food and health should go up", function() {
    hero.eatFood(food1);
    assert.equal(hero.health, 110);
  }),

  it("can eat favFood and health should go up", function() {
    hero.eatFood(food2);
    assert.equal(hero.health, 145); 
  }),

  it("can sort task by difficulty", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks("difficultyLevel");
    assert.deepEqual(hero.taskList, [task1, task3, task2]);
  }),

  it("can sort task by urgency", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks("urgencyLevel");
    assert.deepEqual(hero.taskList, [task2, task1, task3]);
  }),

  it("can sort task by reward", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks("reward");
    assert.deepEqual(hero.taskList, [task1, task2, task3]);
  }),

  it("can see completed tasks", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.seeTaskCompletion(true), [task1]);
  }),

  it("can see uncompleted tasks", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.seeTaskCompletion(false), [task2, task3]);
  }),

  it("rat touch food and became poisonous and hero reduce health", function() {
    rat.touchFood(food1);
    hero.eatFood(food1);
    assert.equal(hero.health, 90);
  })

})
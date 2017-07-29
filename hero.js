var Hero = function (name, health, favFood, talk) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.talk = talk;
  this.taskList = [];
}

Hero.prototype.sayName = function() {
  return (this.talk + this.name)
}

Hero.prototype.addTask = function(task) {
  this.taskList.push(task);
}

Hero.prototype.numberTasks = function() {
  return this.taskList.length;
}


module.exports = Hero;
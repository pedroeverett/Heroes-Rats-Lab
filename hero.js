var Hero = function (name, health, favFood, talk) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.talk = talk;
  this.taskList = [];
}

Hero.prototype.addTask = function(task) {
  this.taskList.push(task);
}


module.exports = Hero;
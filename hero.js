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

Hero.prototype.eatFood = function(food) {
  if(food.name === this.favFood) {
    this.health += (food.repValue * 1.5);
  } else {
    this.health += food.repValue;
  }
}

Hero.prototype.sortTasks = function(type) {
  this.taskList.sort(function(a, b) {
      return a[type] - b[type];
  });
}

Hero.prototype.seeTaskCompletion = function(status) {
  var newTaskList = [];
  for (task of this.taskList) {
    if (task.completed === status) {
      newTaskList.push(task);
    }
  }
  return newTaskList;
}


module.exports = Hero;
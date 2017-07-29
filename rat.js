var Rat = function(name) {
  this.name = name;
}

Rat.prototype.touchFood = function(food) {
  food.repValue = -(food.repValue);
}

module.exports = Rat;
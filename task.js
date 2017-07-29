
var Task = function(difficultyLevel, urgencyLevel, reward, completed) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = completed;

}

module.exports = Task;
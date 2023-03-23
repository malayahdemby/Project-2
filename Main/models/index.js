const User = require('./User');
const Note = require('./Note');
const Task = require('./Task');

User.hasMany(Note, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
}).hasMany(Task, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Note.belongsTo(User, {
  foreignKey: 'user_id'
});

Task.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Note, Task };

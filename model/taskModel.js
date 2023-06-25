const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  priority: String,
  dueDate: Date,
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

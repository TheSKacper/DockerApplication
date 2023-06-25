const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

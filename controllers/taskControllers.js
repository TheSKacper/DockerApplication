const Task = require('../model/taskModel.js');

const createTask = async (req, res) => {
  try {
    const { name, description, priority, dueDate, projectId } = req.body;

    const newTask = {
      name,
      description,
      priority,
      dueDate,
      project: projectId,
    };

    const task = await Task.create(newTask);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const projectId = req.params.projectId;

    const tasks = await Task.find({ project: projectId });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Pozostałe funkcje kontrolerów dla zadań (pobieranie szczegółów, aktualizacja, usuwanie) można implementować podobnie jak powyżej.

module.exports = {
  createTask,
  getAllTasks,
  // ... pozostałe funkcje kontrolerów dla zadań
};

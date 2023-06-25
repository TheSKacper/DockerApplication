const Project = require('../model/projectModel.js');

const createProject = async (req, res) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const owner = req.user.id; // Identyfikator zalogowanego użytkownika

    const newProject = {
      name,
      description,
      startDate,
      endDate,
      owner,
      members: [owner], // Dodaj właściciela projektu jako członka
    };

    const project = await Project.create(newProject);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const user = req.user.id; // Identyfikator zalogowanego użytkownika

    const projects = await Project.find({
      $or: [{ owner: user }, { members: user }],
    });
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Pozostałe funkcje kontrolerów dla projektów (pobieranie szczegółów, aktualizacja, usuwanie) można implementować podobnie jak powyżej.

module.exports = {
  createProject,
  getAllProjects,
};

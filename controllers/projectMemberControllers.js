const Project = require('../model/projectModel.js');
const User = require('../model/userModel.js');

const addMemberToProject = async (req, res) => {
  try {
    const { projectId, memberId } = req.body;
    const ownerId = req.user.id; // Identyfikator zalogowanego użytkownika (właściciela projektu)

    const project = await Project.findById(projectId);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    if (project.owner.toString() !== ownerId) {
      res.status(403).json({ error: 'Only the project owner can add members' });
      return;
    }

    const member = await User.findById(memberId);
    if (!member) {
      res.status(404).json({ error: 'Member not found' });
      return;
    }

    project.members.push(memberId);
    await project.save();

    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProjectMembers = async (req, res) => {
  try {
    const projectId = req.params.projectId;

    const project = await Project.findById(projectId).populate('members', 'username');
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    res.status(200).json(project.members);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Pozostałe funkcje kontrolerów dla członków zespołu (usuwanie członka) można implementować podobnie jak powyżej.

module.exports = {
  addMemberToProject,
  getProjectMembers,
  // ... pozostałe funkcje kontrolerów dla członków zespołu
};

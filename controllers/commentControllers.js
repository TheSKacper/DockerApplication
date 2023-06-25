const Comment = require('../model/commentModel.js');

const createComment = async (req, res) => {
  try {
    const { content, taskId } = req.body;
    const author = req.user.id; // Identyfikator zalogowanego użytkownika

    const newComment = {
      content,
      task: taskId,
      author,
    };

    const comment = await Comment.create(newComment);
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllComments = async (req, res) => {
  try {
    const taskId = req.params.taskId;

    const comments = await Comment.find({ task: taskId });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Pozostałe funkcje kontrolerów dla komentarzy (usuwanie komentarza) można implementować podobnie jak powyżej.

module.exports = {
  createComment,
  getAllComments,
  // ... pozostałe funkcje kontrolerów dla komentarzy
};

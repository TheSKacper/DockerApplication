
const Member = require('../model/memberModel.js');

// Funkcja do obsługi dodawania nowego członka
exports.addMember = async (req, res) => {
  try {
    const { name, user } = req.body;
    const member = new Member({ name, user });
    const savedMember = await member.save();
    res.status(201).json(savedMember);
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd podczas dodawania członka' });
  }
};

// Funkcja do pobierania wszystkich członków
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania członków' });
  }
};

// Funkcja do pobierania pojedynczego członka na podstawie ID
exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Nie znaleziono członka o podanym ID' });
    }
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania członka' });
  }
};

// Funkcja do aktualizowania członka na podstawie ID
exports.updateMember = async (req, res) => {
  try {
    const { name, user } = req.body;
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, { name, user }, { new: true });
    if (!updatedMember) {
      return res.status(404).json({ error: 'Nie znaleziono członka o podanym ID' });
    }
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd podczas aktualizowania członka' });
  }
};

// Funkcja do usuwania członka na podstawie ID
exports.deleteMember = async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndRemove(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ error: 'Nie znaleziono członka o podanym ID' });
    }
    res.status(200).json({ message: 'Członek został pomyślnie usunięty' });
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd podczas usuwania członka' });
  }
};


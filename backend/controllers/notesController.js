const User = require("../models/userModel");
const Note = require("../models/notesModel");

const createNote = async (req, res) => {
  try {
    const { title, content, owner } = req.body;

    const user = await User.findById(owner);
    if (!user) {
      return res.status(404).json({ message: "Owner not found" });  // Add return to stop execution
    }

    const note = new Note({ title, content, owner });
    await note.save();

    res.status(201).json({ message: "Note created", note });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const getMyNote = async (req, res) => {
  try {
    const { userId } = req.params;
    const notes = await Note.find({ owner: userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const shareNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { userIdToShare } = req.body;

    const note = await Note.findById(noteId);
    if (!note) return res.status(404).json({ message: "Note not found" });

    const user = await User.findById(userIdToShare);
    if (!user)
      return res.status(404).json({ message: "User to share with not found" });

    if (!note.shareWith.includes(userIdToShare)) {
      note.shareWith.push(userIdToShare);
      await note.save();
    }

    res.status(200).json({ message: "Note shared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSharedNotes = async (req, res) => {
  try {
    const { userId } = req.params;

    const sharedNotes = await Note.find({ shareWith: userId });
    res.status(200).json(sharedNotes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createNote, getMyNote, shareNote, getSharedNotes };

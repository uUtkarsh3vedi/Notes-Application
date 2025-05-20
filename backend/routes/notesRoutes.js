const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { validateObjectId } = require("../middleware/validateMiddleware");
const {validateBody} = require("../middleware/validateMiddleware");
const {
  createNote,
  getMyNote,
  shareNote,
  getSharedNotes,
} = require("../controllers/notesController");
const {
  noteSchema,
  shareNoteSchema,
} = require("../models/validationSchema");

const router = express.Router();

router.post("/notes", protect, validateBody(noteSchema), createNote);

router.get(
  "/notes/mine/:userId",
  protect,
  validateObjectId("userId"),
  getMyNote
);

router.post(
  "/notes/:noteId/share",
  protect,
  validateObjectId("noteId"),
  validateBody(shareNoteSchema),
  shareNote
);

router.get(
  "/notes/shared/:userId",
  protect,
  validateObjectId("userId"),
  getSharedNotes
);

module.exports = router;

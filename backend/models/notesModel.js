const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  shareWith: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ],
});

module.exports = mongoose.model("Note", noteSchema)
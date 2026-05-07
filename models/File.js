const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  filename: String,
  summary: String,

  quiz: [
    {
      question: String,
      options: [String],
      answer: String,
    },
  ],

  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", FileSchema);
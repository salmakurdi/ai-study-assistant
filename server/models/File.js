const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  filename: String,
  summary: String,

  quiz: [
    {
      question: String,
      options: [String],
      answer: String,
      topic: String, // ✅ required for weak topics
    },
  ],

  attempts: [
    {
      answers: [String],
      score: Number,
      weak: Boolean,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", FileSchema);
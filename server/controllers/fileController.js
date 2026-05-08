const pdf = require("pdf-parse");
const { summarizeText } = require("../services/aiService");
<<<<<<< HEAD
<<<<<<< HEAD
=======
const { generateQuiz } = require("../services/quizService");
>>>>>>> 52a9e20 (quiz generator)

const uploadFile = async (req, res) => {
  try {
    // 1️⃣ Check if file exists
=======
const { generateQuiz } = require("../services/quizService");
const File = require("../models/File"); // ✅ IMPORTANT

const uploadFile = async (req, res) => {
  try {
    // 1️⃣ Check file
>>>>>>> 7b1491d (Added study planner features)
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

<<<<<<< HEAD
    // 2️⃣ Check file type
=======
    // 2️⃣ Validate type
>>>>>>> 7b1491d (Added study planner features)
    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ error: "Only PDF files are allowed" });
    }

<<<<<<< HEAD
    // 3️⃣ Read PDF
    const dataBuffer = req.file.buffer;
    const data = await pdf(dataBuffer);

    // 4️⃣ Validate extracted text
    if (!data.text || data.text.trim().length === 0) {
      return res.status(400).json({ error: "No text found in PDF" });
    }

<<<<<<< HEAD
    // ⚠️ IMPORTANT: limit text size (HuggingFace has limits)
    const MAX_LENGTH = 2000;
    const textToSummarize = data.text.substring(0, MAX_LENGTH);

    // 5️⃣ Send to AI
    const summary = await summarizeText(textToSummarize);

    // 6️⃣ Return summary
    res.json({
      message: "PDF summarized successfully",
      summary: summary,
=======
    // 5️⃣ Limit text
    const MAX_LENGTH = 2000;
    const textToSummarize = data.text.substring(0, MAX_LENGTH);

    // 6️⃣ Generate summary
    const summary = await summarizeText(textToSummarize);

    // 7️⃣ Generate quiz
    const quizRaw = await generateQuiz(summary);
    const quiz = JSON.parse(quizRaw);

    // ✅ FINAL RESPONSE (only once!)
    res.json({
      message: "PDF processed successfully",
      summary,
      quiz,
>>>>>>> 52a9e20 (quiz generator)
=======
    // 3️⃣ Parse PDF
    const data = await pdf(req.file.buffer);

    if (!data.text || data.text.trim().length === 0) {
      return res.status(400).json({ error: "No text found in PDF" });
    }

    // 4️⃣ Limit text (important for API)
    const textToSummarize = data.text.substring(0, 2000);

    // 5️⃣ AI Summary
    const summary = await summarizeText(textToSummarize);

    // 6️⃣ AI Quiz
    const quizRaw = await generateQuiz(summary);
    const quiz = JSON.parse(quizRaw);

    // 7️⃣ SAVE TO DATABASE 🔥
    const savedFile = await File.create({
      filename: req.file.originalname,
      summary,
      quiz,
    });

    // 8️⃣ FINAL RESPONSE ✅ (only once!)
    res.json({
      message: "PDF processed successfully",
      fileId: savedFile._id, // 🔥 VERY IMPORTANT
      summary,
      quiz,
>>>>>>> 7b1491d (Added study planner features)
    });

  } catch (error) {
    console.error("ERROR:", error.message);

    res.status(500).json({
      error: "Something went wrong while processing PDF",
    });
  }
};

module.exports = { uploadFile };
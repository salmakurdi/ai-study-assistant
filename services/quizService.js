const axios = require("axios");

const generateQuiz = async (text) => {
  const prompt = `
You are an AI teacher.

TASK:
Generate 5 multiple choice questions from the following text.

RULES:
- Each question must have 4 options
- Include correct answer
- Return JSON format ONLY

FORMAT:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "answer": "A"
  }
]

TEXT:
${text}
`;

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.choices[0].message.content;
};

module.exports = { generateQuiz };
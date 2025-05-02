require('dotenv').config();
const fs = require('fs');
const { OpenAI } = require('openai');

const openaiAPIkey = process.env.OPENAI_API_KEY;
if (!openaiAPIkey) {
  console.error('OPENAI_API_KEY is missing from environment variables.');
  process.exit(1);
}

const openai = new OpenAI({ apiKey: openaiAPIkey });

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));
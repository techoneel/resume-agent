const { OpenAI } = require('openai');

// const openaiAPIkey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: "<YOUR OPEN AI API KEY>" });

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));
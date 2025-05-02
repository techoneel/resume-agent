require('dotenv').config();
const fs = require('fs');
const { OpenAI } = require('openai');

const openaiAPIkey = process.env.OPENAI_API_KEY;
if (!openaiAPIkey) {
  console.error('OPENAI_API_KEY is missing from environment variables.');
  process.exit(1);
}

const openai = new OpenAI({ apiKey: openaiAPIkey });

async function run() {
  const bio = fs.readFileSync('./inputs/bio.txt', 'utf-8');
  const job = fs.readFileSync('./inputs/job.txt', 'utf-8');

  const prompt = `
You are a resume optimization assistant. Modify the following resume bio to better fit the job description. Keep it professional and concise.

Resume Bio:
${bio}

Job Description:
${job}

Modified Resume Bio:
`;

  try {
    const response = await openai.chat.completions.create({
      // model: 'gpt-4',
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const modifiedBio = response.choices[0].message.content.trim();
    fs.writeFileSync('./output/modified_bio.txt', modifiedBio);
    console.log('Modified resume bio saved to modified_bio.txt');
  } catch (error) {
    console.error('Error:', error);
  }
}

run();

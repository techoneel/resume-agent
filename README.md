# 🧠 Resume Agent (CLI Tool)

A simple Node.js command-line tool that uses OpenAI APIs to **customize a resume bio** to match a given **job description**, using plain `.txt` input and output files.

---

## 🚀 Features

- Reads your resume bio from `bio.txt`
- Reads a job description from `job.txt`
- Uses OpenAI's GPT API to tailor your bio to fit the job
- Outputs a customized version to `modified_bio.txt`

---

## 🛠 Prerequisites

- **Node.js** v16 or above
- An OpenAI API key (get one at https://platform.openai.com/account/api-keys)
- Access to GPT-3.5 or GPT-4 (check your usage plan and quota)

---
## 📦 Setup

1. **Clone the repository or download the files**

```bash
git clone https://github.com/yourusername/resume-agent.git
cd resume-agent
```

2. **Install dependencies**
   
```bash
npm install
```

3. **Create a .env file in the root directory**

```bash
OPENAI_API_KEY=sk-<your-openai-key>
```
> ⚠️ No quotes or spaces around `=`

4. **Prepare your input files**

    Create these two files in the root directory:
    - `bio.txt` – your existing resume summary/bio
    - `job.txt` – the job description you're targeting

---
## ▶️ Run the tool

```bash
npm start
```
After running, you'll get a `modified_bio.txt` file with the adapted summary.

---
## 🧪 Test utilities

You can use the test scripts to debug `.env` and API access:
```bash
npm run test:env       # Print OPENAI_API_KEY from .env
npm run test:openai    # Try a test prompt to check API access
```

---
## 📁 Project Structure

```bash
resume-agent/
├── index.js              # Main logic
├── test_env.js           # .env debug
├── test.js               # OpenAI API test
├── bio.txt               # Input bio
├── job.txt               # Input job description
├── modified_bio.txt      # Output result
├── .env                  # Your OpenAI API key
├── package.json
└── README.md
```

---
## 📌 Notes

- If you hit a `429` error (rate limit or quota), check your OpenAI account usage and billing.
- If `OPENAI_API_KEY` is undefined, verify `.env` file placement and formatting (no quotes, no extra spaces).

---
## 📝 License
MIT – free to use, modify, and distribute.


---
<p style="text-align: center">Made with ❤️ using OpenAI APIs.</p>
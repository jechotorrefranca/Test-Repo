import Groq from "groq-sdk";  // Use import instead of require

const groq = new Groq({ apiKey: "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" });

async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "What is Groq",
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();

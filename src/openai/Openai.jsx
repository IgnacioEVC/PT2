import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export async function questionOpenai() {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content)

    return
}
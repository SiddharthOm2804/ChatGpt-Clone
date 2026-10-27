const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI();

async function main(){
    const interaction = await ai.interactions.create({
    model: "gemini-3.7-flash",
    input: "How are you ?",
    });
    console.log(interaction.output_text);
}

main();
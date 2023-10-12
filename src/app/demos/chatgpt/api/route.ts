import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const params = await req.json();

    const chatResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [...params.messages]
    })
    return Response.json(chatResponse);
}

// exports.chat = (messages, config = {}) => {
//     const root = new Configuration({
//         apiKey: config.apiKey
//     });
//     delete config.apiKey;
//     const openai = new OpenAIApi(root);
//     return openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         ...config,
//         messages: [...messages],
//     }).then((res) => ({
//         text: res.data.choices[0].message.content,
//         usage: res.data.usage
//     }))
// }

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const params = await req.json();

    const chatResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        ...params
    })
    return Response.json(chatResponse);
}


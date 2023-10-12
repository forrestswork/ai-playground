import {list} from './lib';

export async function GET() {
    return Response.json(list());
}

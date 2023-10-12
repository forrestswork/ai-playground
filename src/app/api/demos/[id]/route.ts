import {get} from '../lib';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    return Response.json(get(params.id));
}

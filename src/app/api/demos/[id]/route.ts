import {get} from '@/src/lib/demo-util';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    return Response.json(get(params.id));
}

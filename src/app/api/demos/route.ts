import {list} from '@/src/lib/demo-util';

export async function GET() {
    return Response.json(list());
}

import { NextRequest } from 'next/server'
export async function POST(req: NextRequest) {
  const { search } = await req.json()

}

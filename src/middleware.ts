import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  console.log('MW:', req.nextUrl.pathname);
}

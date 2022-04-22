import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
	const url = req.nextUrl.pathname;
  if (
    process.env.NODE_ENV === 'production' &&
    req.headers.get('x-forwarded-proto') !== 'https' && 
    !host.includes('localhost')
  ) {
    return NextResponse.redirect(`https://${host}${url}`, 301);
  }
}

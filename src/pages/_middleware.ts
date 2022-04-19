import { NextRequest, NextResponse } from 'next/server';

function forceHTTPS(req: NextRequest) {
  const host = req.headers.get('host');
	const url = req.nextUrl.pathname;
  if (
    process.env.NODE_ENV === 'production' &&
    req.headers.get('x-forwarded-proto') !== 'https' && 
    !host.includes('localhost')
  ) {
    return NextResponse.redirect(`https://${host}${url}`,301);
  }
}

function redirectWWWToNonWWW(req: NextRequest) {
  const host = req.headers.get('host');
  const url = req.nextUrl.pathname;
  const wwwRegex = /^www\./;
  if (wwwRegex.test(host) && !host.includes('localhost')) {
    const newHost = host.replace(wwwRegex, '');
    return NextResponse.redirect(`https://${newHost}${url}`, 301);
  }
}

function processMiddlewareFunctions(req: NextRequest, middlewareFns: Function[]) {
  for (const middlewareFn of middlewareFns) {
    const fnResponse = middlewareFn(req);
    if (fnResponse) {
      return fnResponse;
    }
  }
  return NextResponse.next();
}

export function middleware(req: NextRequest) {
  return processMiddlewareFunctions(req, [ forceHTTPS, redirectWWWToNonWWW ]);
}

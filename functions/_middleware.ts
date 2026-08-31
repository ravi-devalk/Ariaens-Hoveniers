interface Env { SITE_PASSWORD: string }
interface Context {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
}

export const onRequest = async ({ request, env, next }: Context) => {
  const authorization = request.headers.get('Authorization');
  const expected = `Basic ${btoa(`ariaens:${env.SITE_PASSWORD}`)}`;

  if (authorization !== expected) {
    return new Response('Deze besloten preview is beveiligd.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Ariaens Hoveniers preview", charset="UTF-8"',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  const response = await next();
  const secured = new Response(response.body, response);
  secured.headers.set('Cache-Control', 'private, no-store');
  secured.headers.set('X-Robots-Tag', 'noindex, nofollow');
  secured.headers.set('Referrer-Policy', 'no-referrer');
  return secured;
};

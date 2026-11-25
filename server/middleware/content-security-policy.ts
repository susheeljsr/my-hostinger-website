/**
 * Puts Content-Security-Policy on the serverless response itself.
 * Vercel also repeats the same policy from nitro routeRules and vercel.json
 * so scanners see the header on HTML and on static files.
 */
import { setResponseHeader } from "h3";
import { contentSecurityPolicy } from "../../src/lib/content-security-policy";

export default async function contentSecurityPolicyMiddleware(
  event: Parameters<typeof setResponseHeader>[0],
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  const policy = contentSecurityPolicy();

  if (result instanceof Response) {
    if (result.headers.has("content-security-policy")) return result;
    const headers = new Headers(result.headers);
    headers.set("content-security-policy", policy);
    return new Response(result.body, {
      status: result.status,
      statusText: result.statusText,
      headers,
    });
  }

  setResponseHeader(event, "content-security-policy", policy);
  return result;
}

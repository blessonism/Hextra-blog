export const onRequestGet: PagesFunction<{ VIEWS: KVNamespace }> = async (ctx) => {
  const { request, env } = ctx;
  const { searchParams } = new URL(request.url);
  const slug = normalizeSlug(searchParams.get("slug"));
  if (!slug) return json({ error: "missing slug" }, 400);
  const val = await env.VIEWS.get(slug);
  const count = parseInt(val || "0", 10) || 0;
  return json({ count });
};

export const onRequestPost: PagesFunction<{ VIEWS: KVNamespace }> = async (ctx) => {
  const { request, env } = ctx;
  const { searchParams } = new URL(request.url);
  const slug = normalizeSlug(searchParams.get("slug"));
  if (!slug) return json({ error: "missing slug" }, 400);

  // Note: KV lacks atomic INCR on Pages bindings; this is good enough for low/medium traffic
  const cur = parseInt((await env.VIEWS.get(slug)) || "0", 10) || 0;
  const next = cur + 1;
  await env.VIEWS.put(slug, String(next));
  return json({ count: next });
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function normalizeSlug(raw: string | null): string | null {
  if (!raw) return null;
  try {
    let s = decodeURIComponent(raw);
    if (!s.startsWith("/")) s = "/" + s;
    // unify trailing slash
    if (!s.endsWith("/")) s = s + "/";
    return s;
  } catch {
    return null;
  }
}


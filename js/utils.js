// Simple helpers for query params and slugging
export function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

export function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/**
 * Simple in-memory rate limiter and per-session "already notified" guard.
 *
 * NOTE: this resets on every server restart/redeploy and is per-instance only.
 * For real production traffic on serverless (e.g. Vercel), replace with a
 * shared store such as Upstash Redis / Vercel KV.
 */

const windowMs = Number(process.env.CHAT_RATE_LIMIT_WINDOW_MS ?? 60_000);
const maxRequests = Number(process.env.CHAT_RATE_LIMIT_MAX ?? 20);

const hits = new Map<string, number[]>();
const notifiedSessions = new Set<string>();
const pingedSessions = new Set<string>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > maxRequests;
}

export function hasAlreadyNotified(sessionId: string): boolean {
  return notifiedSessions.has(sessionId);
}

export function markNotified(sessionId: string): void {
  notifiedSessions.add(sessionId);
}

/** Separate guard so the "someone started chatting" ping fires once per
 *  session, independently of whether that session later becomes a lead. */
export function hasAlreadyPinged(sessionId: string): boolean {
  return pingedSessions.has(sessionId);
}

export function markPinged(sessionId: string): void {
  pingedSessions.add(sessionId);
}

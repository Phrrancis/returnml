export function track(event: string, params: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
      (window as unknown as Record<string, (event: string, params: Record<string, unknown>) => void>).gtag(event, params);
    }
  } catch {}
}

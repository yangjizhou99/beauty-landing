// UTM 擷取/保存/拼接 - 為未來 GA4 準備
export function getUTM() {
  if (typeof window === 'undefined') return {} as Record<string, string>;
  
  const url = new URL(window.location.href);
  const params = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
  const utm: Record<string, string> = {};
  
  params.forEach(k => {
    const v = url.searchParams.get(k);
    if (v) utm[k] = v;
  });
  
  // 儲存以便跨頁
  if (Object.keys(utm).length) {
    localStorage.setItem("utm", JSON.stringify(utm));
  } else {
    try {
      return JSON.parse(localStorage.getItem("utm") || "{}");
    } catch {
      return {};
    }
  }
  
  return utm;
}

export function buildLineUrlWithUTM(base: string, extra?: Record<string, string | number>) {
  const utm = getUTM();
  const u = new URL(base);
  
  Object.entries(utm).forEach(([k, v]) => u.searchParams.set(k, String(v)));
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => u.searchParams.set(String(k), String(v)));
  }
  
  return u.toString();
}

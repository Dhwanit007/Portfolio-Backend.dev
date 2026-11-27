export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    console.error("CRON_SECRET is not configured.");
    return res.status(500).json({ error: "Cron secret is not configured." });
  }

  if (req.headers.authorization !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are not configured.");
    return res.status(500).json({ error: "Supabase is not configured." });
  }

  let endpoint;
  try {
    endpoint = new URL("/rest/v1/portfolio_profile", supabaseUrl);
  } catch (error) {
    console.error("VITE_SUPABASE_URL is invalid.", error);
    return res.status(500).json({ error: "Supabase URL is invalid." });
  }

  endpoint.searchParams.set("select", "id");
  endpoint.searchParams.set("id", "eq.main");

  const response = await fetch(endpoint, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
  });

  if (!response.ok) {
    console.error("Supabase keep-alive query failed.", response.status);
    return res.status(502).json({ error: "Supabase query failed." });
  }

  const rows = await response.json();
  if (!Array.isArray(rows) || rows.length === 0) {
    console.error("Supabase keep-alive query returned no profile row.");
    return res.status(502).json({ error: "Portfolio profile is unavailable." });
  }

  return res.status(200).json({ ok: true });
}

const adsTxt = "google.com, pub-7928504805613676, DIRECT, f08c47fec0942fa0";

export function GET() {
  return new Response(adsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}

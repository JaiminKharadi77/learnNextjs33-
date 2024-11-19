export const dynamic = "force-dynamic";

export async function GET() {
  let time = new Date().toLocaleTimeString();

  return new Response(JSON.stringify({ time }), {
    headers: { "Content-Type": "application/json" },
  });
}

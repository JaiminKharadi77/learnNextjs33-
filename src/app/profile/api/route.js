import { headers } from "next/headers";

export async function GET(request) {
  const requestHeaders = new Headers(request.headers);

  const headersList = await headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

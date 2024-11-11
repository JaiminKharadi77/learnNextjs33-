import { comments } from "../data";

export async function GET(_request, { params }) {
  const { id } = await params; // Awaiting params to avoid sync access error
  const comment =
    comments.find((comment) => comment.id === parseInt(id)) ||
    "Specific id is not found";
  return new Response(JSON.stringify(comment), {
    headers: { "Content-Type": "application/json" },
  });
}

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

export async function PATCH(request, { params }) {
  const { id } = await params;

  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  comments[index].text = text;

  return new Response(JSON.stringify(comments[index]), {
    headers: { "Content-Type": "application/json" },
  });
}

import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
  const { id } = await params; // Awaiting params to avoid sync access error
  const comment =
    comments.find((comment) => comment.id === parseInt(id)) ||
    "Specific id is not found";

  if (comment === "Specific id is not found") redirect("/comments"); // will direct to comments route

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

export async function DELETE(_, { params }) {
  //If the request object is unnecessary for your use case, you can skip it but keep the context as the second parameter
  const { id } = await params;
  console.log(id);

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  const deletedComment = comments[index];
  comments.splice(index, 1);

  return new Response(JSON.stringify(deletedComment), {
    headers: { "Content-Type": "application/json" },
  });
}

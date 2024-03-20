import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const post = await Post.findById(id);

    if (!post) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(post);
  }

  if (request.method === "PUT") {
    await Post.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Post.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}

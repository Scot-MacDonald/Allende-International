import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Post.find();
    return response.status(200).json(posts);
  }

  if (request.method === "POST") {
    try {
      const postData = request.body;
      await Post.create(postData);

      response.status(201).json({ status: "Post created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

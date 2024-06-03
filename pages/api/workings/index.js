import dbConnect from "@/db/connect";
import Working from "@/db/models/Working";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const workings = await Working.find();
    return response.status(200).json(workings);
  }

  if (request.method === "POST") {
    try {
      const workingData = request.body;
      await Working.create(workingData);

      response.status(201).json({ status: "Post created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

import dbConnect from "@/db/connect";
import Arbeit from "@/db/models/Arbeit";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const arbeits = await Arbeit.find();
    return response.status(200).json(arbeits);
  }

  if (request.method === "POST") {
    try {
      const arbeitData = request.body;
      await Arbeit.create(arbeitData);

      response.status(201).json({ status: "Post created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

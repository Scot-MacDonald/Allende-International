import dbConnect from "@/db/connect";
import Date from "@/db/models/Date";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const dates = await Date.find();
    return response.status(200).json(dates);
  }

  if (request.method === "POST") {
    try {
      const dateData = request.body;
      await Date.create(dateData);

      response.status(201).json({ status: "Date created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

import dbConnect from "@/db/connect";
import Date from "@/db/models/Date";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const date = await Date.findById(id);

    if (!date) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(date);
  }

  if (request.method === "PUT") {
    await Date.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Date.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}

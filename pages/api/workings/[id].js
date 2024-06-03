import dbConnect from "@/db/connect";
import Working from "@/db/models/Working";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const working = await Working.findById(id);

    if (!working) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(working);
  }

  if (request.method === "PUT") {
    await Working.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Working.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}

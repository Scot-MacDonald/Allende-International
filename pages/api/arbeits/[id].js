import dbConnect from "@/db/connect";
import Arbeit from "@/db/models/Arbeit";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const arbeit = await Arbeit.findById(id);

    if (!arbeit) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(arbeit);
  }

  if (request.method === "PUT") {
    await Arbeit.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Arbeit.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}

import dbConnect from "../../../../lib/dbConnect";
import Business from "../../../../models/Business";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const business = await Business.create(req.body);
        res.status(201).json({ success: true, data: business });
      } catch (err) {
        res.status(400).json({ success: false, message: err.message });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: "Ups! Something went wrong in /business/register",
      });
      break;
  }
}

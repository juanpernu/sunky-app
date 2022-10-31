import dbConnect from "../../../../lib/dbConnect";
import Customer from "../../../../models/Customer";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const customer = await Customer.create(req.body);
        res.status(201).json({ success: true, data: customer });
      } catch (err) {
        res.status(400).json({ success: false, message: err.message });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: "Ups! Something went wrong in /customers/register",
      });
      break;
  }
}

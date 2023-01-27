// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "db/connect";
import Program from "db/models/program.model";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const program = await Program.find({});
        return res.status(200).send({ success: true , data: program });
      } catch (err) {
        return res.status(400).send({ success: false });
      }
    default:
      res.status(400).json({ success: false })
      break
  }
}

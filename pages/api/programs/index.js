import { newGuid } from "utils/guid";
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
    
    case 'POST':
      try {
        const { body } = req;
        const id = newGuid();
        const newProgram = new Program({
          id,
          ...body
        });

        console.log(newProgram);

        await newProgram.save();

        return res.status(200).send({ success: true });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
      }

    default:
      return res.status(400).json({ success: false });
  }
}

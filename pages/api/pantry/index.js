import dbConnect from '../../../db';
import Pantry from '../../../models/Pantry';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      const ingredients = await Pantry.find({}).exec();
      res.status(200).json({ data: ingredients });
      break;

    case 'POST':
      const ingredient = await Pantry.create(req.body);
      res.status(201).json({ data: ingredient });
      break;

    default:
      res.sendStatus(400);
      break;
  }
}

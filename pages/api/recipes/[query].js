import dbConnect from '../../../db';
import Recipe from '../../../models/Recipe';

export default async function handler(req, res) {
  const { query: { query }, method } = req;

  await dbConnect();

  // FIXME: I only support searches right now
  const results = await Recipe
    .find({ $text: { $search: query } })
    .limit(10)
    .lean()
    .exec();

  res.status(200).json({ data: results });
}

import dbConnect from '../../../db';
import Recipe from '../../../models/Recipe';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // FIXME: I only support searches right now
  // const results = Recipe.find()
  console.log(req.query);
  res.end();
}

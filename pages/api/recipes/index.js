import dbConnect from '../../../db';
import Recipe from '../../../models/Recipe';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // FIXME: I only support searches right now
  const results = await Recipe.aggregate([{ $sample: { size: 10 } }]).exec();

  const recipes = results.map((recipe) => {
    // fix some weirdness to make fields serializable as JSON
    recipe._id = recipe._id.toString();

    return recipe;
  });

  res.status(200).json({ data: recipes });
}

import Layout from '../components/layout';
import RecipeItem from '../components/RecipeItem';
import dbConnect from '../db';
import Recipe from '../models/Recipe';

import styles from '../styles/Home.module.css';

export default function recipes({ recipes }) {
  return (
    <Layout>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe._id} {...recipe} />
      ))}
    </Layout>
  );
}

const fetchFromAPI = async function () {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const appId = process.env.EDAMAM_APP_ID;
  const appKey = process.env.EDAMAM_APP_KEY;
  const query = 'taco';

  const result = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`,
    requestOptions
  );

  return (await result.json()).hits;
};

export async function getServerSideProps() {
  await dbConnect();

  const results = await Recipe.aggregate([{ $sample: { size: 10 } }]).exec();

  const recipes = results.map((recipe) => {
    // fix some weirdness to make fields serializable as JSON
    recipe._id = recipe._id.toString();

    return recipe;
  });

  console.log(recipes);

  return {
    props: {
      recipes,
    },
  };
}

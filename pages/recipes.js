import { useState } from 'react';

import Layout from '../components/layout';
import RecipeItem from '../components/RecipeItem';
import dbConnect from '../db';
import Recipe from '../models/Recipe';

export default function Recipes({ recipes }) {
  const [runtimeRecipes, setRuntimeRecipes] = useState([]);

  const shuffle = async () => {
    const results = await (await fetch('/api/recipes')).json();

    setRuntimeRecipes(results.data);
  }
  return (
    <>
      <div>
        <h1 className="m-0 text-6xl text-center mt-4" onClick={shuffle}>
          Recipes
        </h1>
      </div>
      <Layout>
        {runtimeRecipes.length
          ? runtimeRecipes.map((recipe) => (
              <RecipeItem key={recipe._id} {...recipe} />
            ))
          : recipes.map((recipe) => (
              <RecipeItem key={recipe._id} {...recipe} />
            ))}
      </Layout>
    </>
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

export async function getStaticProps() {
  await dbConnect();

  const results = await Recipe.aggregate([{ $sample: { size: 10 } }]).exec();

  const recipes = results.map((recipe) => {
    // fix some weirdness to make fields serializable as JSON
    recipe._id = recipe._id.toString();

    return recipe;
  });

  return {
    props: {
      recipes,
    },
  };
}

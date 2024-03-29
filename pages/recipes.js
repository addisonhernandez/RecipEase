import { useState } from 'react';

import Layout from '../components/layout';
import RecipeItem from '../components/RecipeItem';
import dbConnect from '../db';
import Models from '../models';

export default function Recipes({ recipes }) {
  const [runtimeRecipes, setRuntimeRecipes] = useState([]);

  const shuffle = async () => {
    const results = await (await fetch('/api/recipes')).json();

    setRuntimeRecipes(results.data);
  };

  return (
    <>
      <div>
        <h1
          className="m-0 text-6xl text-center mt-4 hover:decoration-[#0070f3] hover:underline hover:cursor-pointer"
          onClick={shuffle}
        >
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

export async function getStaticProps() {
  await dbConnect();

  const results = await Models.Recipe.aggregate([{ $sample: { size: 10 } }]).exec();

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

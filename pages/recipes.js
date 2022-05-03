import Layout from '../components/layout';

import styles from '../styles/Home.module.css';

export default function recipes({ recipes }) {
  return (
    <Layout>
      {recipes.map(({ recipe }) => (
        <div key={recipe.uri}>
          <div className={styles.card}>
            <h2>
              <a href={recipe.url}>{recipe.label}</a>
            </h2>
            <div>
              <p>Total time: {recipe.totalTime}</p>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
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

  const recipes = (await result.json()).hits;

  return {
    props: {
      recipes,
    },
  };
}

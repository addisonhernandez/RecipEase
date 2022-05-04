import styles from './PantryItem.module.css';

export default function RecipeItem({ title, ingredients }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>
        <p>Ingredients: </p>
        <ul>
          {ingredients.slice(0, 4).map((ingredient) => (
            <li key={title + ingredient}>{ingredient}</li>
          ))}
          {ingredients.length >= 4 ? <li>...</li> : null}
        </ul>
      </div>
    </div>
  );
}

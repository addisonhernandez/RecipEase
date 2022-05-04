import styles from './PantryItem.module.css';

export default function RecipeItem({ title, ingredients }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>
        <p>Ingredients: </p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

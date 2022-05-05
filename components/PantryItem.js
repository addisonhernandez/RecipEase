import styles from './PantryItem.module.css';

export default function PantryItem({ ingredient_name, date_added }) {
  return (
    <div className={styles.card}>
      <h2>{ingredient_name}</h2>
      <div>
        <p>Date added: {date_added}</p>
      </div>
    </div>
  );
}

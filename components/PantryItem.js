import styles from './PantryItem.module.css';

export default function PantryItem({ name, quantity, date_added, expiration }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <div>
        <p>
          Qty: <span>{quantity.amount}</span>
          <span>{quantity.unit}</span>
        </p>
        <p>Date added: {date_added}</p>
        <p>Expiration: {expiration}</p>
      </div>
    </div>
  );
}

import styles from './PantryItem.module.css';

export default function PantryItem({ item }) {
  return (
    <div className={styles.card}>
      <h2>{item.name}</h2>
      <div>
        <p>
          Qty: <span>{item.quantity.amount}</span>
          <span>{item.quantity.unit}</span>
        </p>
        <p>Date added: {item.date_added}</p>
        <p>Expiration: {item.expiration}</p>
      </div>
    </div>
  );
}

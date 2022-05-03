import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function pantry({ groceries }) {
  return (
    <>
      {/* Create an entry for each item */}
      {groceries.map((item) => (
        <div key={item._id}>
          {/* TODO: Component */}
          <div className={styles.card}>
            {/* <Image src={item.image_url} alt={item.name} /> */}
            <h2>{item.name}</h2>
            <div>
              {/* TODO: moment.js */}
              <p>{item.date_added}</p>
              <p>{item.expiration}</p>
              <p>
                <span>{item.quantity.amount}</span>
                <span>{item.quantity.unit}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <button type="button">Add an item</button>
    </>
  );
}

export async function getStaticProps() {
  // FIXME: Testing only
  const groceries = [
    {
      _id: 1,
      date_added: Date.now(),
      expiration: Date.now() + 5,
      name: 'Milk',
      quantity: {
        amount: 1,
        unit: 'gal',
      },
    },
    {
      _id: 2,
      date_added: Date.now(),
      expiration: Date.now() + 5,
      name: 'Eggs',
      quantity: {
        amount: 1,
        unit: 'dozen',
      },
    },
  ];

  return {
    props: {
      groceries,
    },
  };
}

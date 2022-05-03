import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/layout';
import dbConnect from '../db';
import Pantry from '../models/Pantry';

import styles from '../styles/Home.module.css';

export default function pantry({ groceries }) {
  return (
    <Layout>
      {/* Create an entry for each item */}
      {groceries.map((item) => (
        <div key={item._id}>
          {/* TODO: Component */}
          <div className={styles.card}>
            {/* <Image src={item.image_url} alt={item.name} /> */}
            <h2>{item.name}</h2>
            <div>
              <p>
                <span>{item.quantity.amount}</span>
                <span>{item.quantity.unit}</span>
              </p>
              {/* TODO: moment.js */}
              <p>{item.date_added}</p>
              <p>{item.expiration}</p>
            </div>
          </div>
        </div>
      ))}
      <button type="button">Add an item</button>
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  // Test upsert, pls ignore
  // await Pantry.findOneAndUpdate(
  //   { name: 'Milk' },
  //   {
  //     date_added: Date.now(),
  //     expiration: Date.now() + 5,
  //     name: 'Milk',
  //     quantity: {
  //       amount: 1,
  //       unit: 'gal',
  //     },
  //   },
  //   { upsert: true }
  // );
  // await Pantry.findOneAndUpdate(
  //   { name: 'Eggs' },
  //   {
  //     date_added: Date.now(),
  //     expiration: Date.now() + 5,
  //     name: 'Eggs',
  //     quantity: {
  //       amount: 1,
  //       unit: 'dozen',
  //     },
  //   },
  //   { upsert: true }
  // );

  const results = await Pantry.find({});
  const groceries = results.map((doc) => {
    const item = doc.toObject();

    // fix some weirdness to make them serializable as JSON
    item._id = item._id.toString();
    item.date_added = item.date_added.toString();
    item.expiration = item.expiration.toString();

    return item;
  });

  return {
    props: {
      groceries,
    },
  };
}

import moment from 'moment';

import Layout from '../components/layout';
import dbConnect from '../db';
import Pantry from '../models/Pantry';

import styles from '../styles/Home.module.css';

export default function pantry({ groceries }) {
  return (
    <Layout>
      {groceries.map((item) => (
        <div key={item._id}>
          {/* TODO: Component */}
          <div className={styles.card}>
            {/* <Image src={item.image_url} alt={item.name} /> */}
            <h2>{item.name}</h2>
            <div>
              <p>
                Qty:{' '}
                <span>{item.quantity.amount}</span>
                <span>{item.quantity.unit}</span>
              </p>
              {/* TODO: moment.js */}
              <p>Date added: {item.date_added}</p>
              <p>Expiration: {item.expiration}</p>
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

  const results = await Pantry.find({});
  const groceries = results.map((doc) => {
    const item = doc.toObject();

    // fix some weirdness to make them serializable as JSON
    item._id = item._id.toString();
    item.date_added = moment(item.date_added.toString()).format('MMM Do YYYY');
    item.expiration = moment(item.expiration.toString()).format('MMM Do YYYY');

    return item;
  });

  return {
    props: {
      groceries,
    },
  };
}

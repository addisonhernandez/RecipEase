import moment from 'moment';

import Layout from '../components/layout';
import PantryItem from '../components/PantryItem';

import dbConnect from '../db';
import Pantry from '../models/Pantry';

export default function pantry({ groceries }) {
  return (
    <>
      <div>
        <h1 className='m-0 text-6xl text-center mt-4'>Pantry</h1>
      </div>
      <Layout>
        {groceries.map((item) => (
          <PantryItem key={item._id} {...item} />
        ))}
        <button type="button">Add an item</button>
      </Layout>
    </>
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

import moment from 'moment';
import { useState } from 'react';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import PantryItem from '../components/PantryItem';
import PantryForm from '../components/PantryForm';

import dbConnect from '../db';
import Models from '../models';

export default function Pantry({ groceries }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newIngredient, setNewIngredient] = useState('');

  const toggle = () => setIsOpen((state) => !state);

  const handleNewIngredient = (ingredient) => {
    if (!ingredient || !(typeof ingredient === 'string')) {
      setNewIngredient('');
      return;
    }

    console.log({ingredient})
    fetch('/pantry', {
      method: 'POST',
      body: ingredient,
    }).then(() => setIsOpen(false));
  };

  return (
    <>
      <div>
        <h1 className="m-0 text-6xl text-center mt-4">Pantry</h1>
      </div>
      <Layout>
        {groceries.map((item) => (
          <PantryItem key={item._id} {...item} />
        ))}
        <button type="button" onClick={() => setIsOpen(true)}>
          Add an item
        </button>
      </Layout>
      <Modal
        isOpen={isOpen}
        toggleModal={toggle}
        buttonAction={handleNewIngredient}
      >
        <PantryForm handleChange={setNewIngredient} />
      </Modal>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const results = await Models.Pantry.find({});
  const groceries = results.map((doc) => {
    const item = doc.toObject();

    // fix some weirdness to make them serializable as JSON
    item._id = item._id.toString();
    item.date_added = moment(item.date_added.toString()).format('MMM Do YYYY');

    return item;
  });

  return {
    props: {
      groceries,
    },
  };
}

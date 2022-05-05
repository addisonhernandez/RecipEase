import { useState } from 'react';

import Modal from './Modal';
import RecipeDetail from './RecipeDetail';

import styles from './PantryItem.module.css';

export default function RecipeItem(props) {
  const { title, ingredients } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((state) => !state);

  return (
    <>
      <Modal isOpen={isOpen} toggleModal={toggle}>
        <RecipeDetail {...props} />
      </Modal>
      <div className={styles.card} onClick={toggle}>
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
    </>
  );
}

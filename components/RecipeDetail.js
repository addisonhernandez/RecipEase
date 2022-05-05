import Link from 'next/link';
import styles from './PantryItem.module.css';
import { Dialog } from '@headlessui/react';

export default function RecipeDetail({ title, ingredients, instructions }) {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        {title}
      </Dialog.Title>

      <div className="mt-2">
        <p className="text-sm text-gray-500">Ingredients: </p>
        <div className='grid grid-cols-2 gap-x-4'>
          {ingredients.map((ingredient) => (
            <li key={title + ingredient} className="text-sm text-gray-500">
              {ingredient}
            </li>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">Instructions: </p>
        <ol className="list-decimal list-inside">
          {instructions.split('\n').map((instruction) => (
            <li
              key={title + instruction}
              className="text-sm text-gray-500 mb-1 leading-[1.125]"
            >
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

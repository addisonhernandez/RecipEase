import { useRef, useState, useEffect } from 'react';

export default function Planner() {
  const [mealChoices, setMealChoices] = useState([]);

  return (
    <>
      <div>
        <h1 className="m-0 text-6xl text-center mt-4">Meal Plan</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-8">
        <WeekForm setMealChoices={setMealChoices} />
        <ShoppingList mealChoices={mealChoices} />
      </div>
    </>
  );
}

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const WeekForm = ({ setMealChoices }) => {
  const formRef = useRef();

  const [dayOfWeek, setDayOfWeek] = useState('Monday');
  const [recipeOptions, setRecipeOptions] = useState([]);

  const handleSubmit = () => {};

  const searchRecipes = async (query) => {
    if (!query || !query.length) return;
    try {
      const res = await fetch(`/api/recipes/${query}`);

      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      setRecipeOptions(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search for a recipe"
          onChange={(e) => searchRecipes(e.target.value)}
        />
        <select onChange={(e) => setDayOfWeek(e.target.value)}>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </form>
      <div>
        {recipeOptions.length
          ? recipeOptions.map((recipe) => (
              <li key={recipe._id}>{recipe.title}</li>
            ))
          : null}
      </div>
    </div>
  );
};

const ShoppingList = () => <div>Shopping List</div>;

import { useRef, useState } from 'react';

export default function Planner() {
  const [mealChoices, setMealChoices] = useState({});

  return (
    <>
      <div>
        <h1 className="m-0 text-6xl text-center my-4">Meal Plan</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-8">
        <WeekForm mealChoices={mealChoices} setMealChoices={setMealChoices} />
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

// TODO: Move to component
const WeekForm = ({ mealChoices, setMealChoices }) => {
  const formRef = useRef();

  const [dayOfWeek, setDayOfWeek] = useState('Monday');
  const [recipeOptions, setRecipeOptions] = useState([]);

  const searchRecipes = async (query) => {
    if (!query) return;

    if (query.length < 3) {
      setRecipeOptions([]);
      return;
    }

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
      <h1 className="text-xl underline">Search</h1>
      <form
        ref={formRef}
        className="flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search for a recipe"
          onChange={(e) => searchRecipes(e.target.value)}
        />
        <select onChange={(e) => setDayOfWeek(e.target.value)}>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {(mealChoices.hasOwnProperty(day) ? '✔️ ' : '') + day}
            </option>
          ))}
        </select>
      </form>
      <div className="flex flex-col gap-1 mt-2">
        {recipeOptions.length
          ? recipeOptions.map((recipe) => (
              <div
                key={recipe._id}
                onClick={() =>
                  setMealChoices((choices) => ({
                    ...choices,
                    [dayOfWeek]: recipe,
                  }))
                }
              >
                {recipe.title}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

// TODO: Move to component
const ShoppingList = ({ mealChoices }) => {
  return (
    <div>
      <h1 className="text-xl underline">Shopping List</h1>
      {Object.values(mealChoices).map(({ ingredients }) =>
        ingredients.map((ingredient) => (
          <div key={ingredient}>{ingredient}</div>
        ))
      )}
    </div>
  );
};

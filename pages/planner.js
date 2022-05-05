import { useRef, useState } from 'react';
import Recipe from '../models/Recipe';
import dbConnect from '../db';

export default function Planner() {
  const [mealChoices, setMealChoices] = useState();

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

  // const [monday, setMonday] = useState('');
  // const [tuesday, setTuesday] = useState('');
  // const [wednesday, setWednesday] = useState('');
  // const [thursday, setThursday] = useState('');
  // const [friday, setFriday] = useState('');
  // const [saturday, setSaturday] = useState('');
  // const [sunday, setSunday] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('Monday');

  const handleSubmit = () => {};

  const searchRecipes = async (query) => {
    await dbConnect();

    const results = Recipe.find();
  };

  return (
    <form ref={formRef} className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
      {/* <label>
        <input
          type="text"
          placeholder="Monday"
          onChange={(e) => setMonday(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Tuesday"
          onChange={(e) => setTuesday(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Wednesday"
          onChange={(e) => setWednesday(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Thursday"
          onChange={(e) => setThursday(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Friday"
          onChange={(e) => setFriday(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Saturday"
          onChange={(e) => setSaturday(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Sunday"
          onChange={(e) => setSunday(e.target.value)}
        />
      </label> */}
    </form>
  );
};

const ShoppingList = () => {};

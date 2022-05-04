import { useRef, useState } from 'react';

export default function planner() {
  return (
    <>
      <div>
        <h1 className="m-0 text-6xl text-center mt-4">Meal Plan</h1>
      </div>
      <div className='grid grid-cols-2 gap-4 mx-8'>
        <WeekForm />
      </div>
    </>
  );
}

const WeekForm = ({ setMealChoices }) => {
  const formRef = useRef();

  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');
  const [sunday, setSunday] = useState('');

  return (
    <form ref={formRef} className="flex flex-col gap-2">
      <label>
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
      </label>
    </form>
  );
};

const ShoppingList = () => {};

import { useRef, useState } from 'react';

export default function planner() {
  return <div>planner</div>;
}

const WeekForm = () => {
  const formRef = useRef();

  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');
  const [sunday, setSunday] = useState('');

  const handleSubmit = () => {};

  return (
    <form ref={formRef}>
      <label>
        <input
          type="text"
          placeholder="Monday"
          onChange={(e) => setMonday(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Tuesday"
          onChange={(e) => setTuesday(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Wednesday"
          onChange={(e) => setWednesday(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Thursday"
          onChange={(e) => setThursday(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Friday"
          onChange={(e) => setFriday(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Saturday"
          onChange={(e) => setSaturday(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Sunday"
          onChange={(e) => setSunday(e.target.value)}
          required
        />
      </label>
    </form>
  );
};

const ShoppingList = () => {};

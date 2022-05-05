export default function PantryForm({ handleChange }) {
  return (
    <label>
      <input
        type="text"
        placeholder="Add an ingredient"
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
}

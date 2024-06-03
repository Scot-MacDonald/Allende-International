export default function WorkingForm({ value, onSubmit, isEditMode }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title-input">
        {isEditMode ? "Edit the title" : "Enter a new title"}
      </label>
      <input type="text" id="title-input" name="title" defaultValue={value} />
      <button type="submit">Submit</button>
    </form>
  );
}

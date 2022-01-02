import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className="p-4 bg-gray-200 rounded-lg m-8 shadow-2xl"
      onSubmit={onSubmit}
    >
      <div className="py-4">
        <label>Task</label>
        <input
          className="w-full"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="py-4">
        <label>Day & Time</label>
        <input
          className="w-full"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="py-4 flex flex-row justify-between">
        <label>Set Reminder</label>
        <input
          className="scale-125"
          checked={reminder}
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        className="text-white w-full bg-black p-4"
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;

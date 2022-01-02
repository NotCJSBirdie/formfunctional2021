import React from "react";
import "./Form.css";
import Tasks from "./Tasks";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";

const Form = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Delete task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000) + 1;

    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <section class="justify-center max-w-4xl p-6 mx-auto bg-sky-600/50 rounded-md shadow-2xl dark:bg-gray-800">
        <div class="flex flex-row justify-between">
          <h2
            id="tasktracker"
            class="z-50 scale-150 text-xl relative -left-12  text-teal-200 dark:text-white"
          >
            TASK TRACKER
          </h2>
          <button
            onClick={() => setShowAddTask(!showAddTask)}
            id="button"
            className="z-50 scale-125 relative -right-12 -top-2 text-teal-400 bg-sky-700 p-2 rounded-full shadow-2xl"
          >
            {showAddTask ? "Close" : "Add"}
          </button>
        </div>

        <div>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            "no task to show"
          )}
        </div>
      </section>
    </div>
  );
};

export default Form;

import { useState } from "react";

function TasksList({ tasks, setTasks }) {
  const [filter, setFilter] = useState("Pending");
  const handleFilterChange = (e) => setFilter(e.target.value);
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  const pickRandomTask = () => {
    const pending = tasks.filter((t) => !t.completed);
    if (pending.length === 0) return alert("No pending tasks! Great job!");
    const random = pending[Math.floor(Math.random() * pending.length)];
    alert("Focus on: " + random.title);
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <div className="controls">
        <label htmlFor="showTasks">Show Tasks: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <br />
        <br />
        <hr />
        <br />
        <label htmlFor="focusMode">Enter Focus Mode: </label>
        <button onClick={pickRandomTask}>Focus Mode</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <span onClick={() => toggleTask(task.id)}>
              {task.title} ({task.priority})
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;

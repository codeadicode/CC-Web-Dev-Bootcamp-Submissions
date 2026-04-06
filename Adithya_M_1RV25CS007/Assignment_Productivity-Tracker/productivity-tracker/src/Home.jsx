import { useState } from "react";
import { Navigate } from "react-router-dom";

function Home({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);

  const addTask = () => {
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");

    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Navigate to="/tasks" />;
  }

  return (
    <div>
      <h2>Add a New Task</h2>
      <div className="input-section">
        <label htmlFor="input">Task:</label>
        <br />
        <input type="text" value={title} onChange={handleTitleChange} />
        <br />
        <br />
        <label htmlFor="priority">Set Priority: </label>
        <br />
        <select value={priority} onChange={handlePriorityChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <br />
        <br />

        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import TasksList from "./TasksList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Router>
        <div className="container">
          <h1>Productivity Tracker</h1>
          <br />
          <nav>
            <Link to="/">Add Task</Link> | <Link to="/tasks">View Tasks</Link> |{" "}
            <Link to="/stats">Stats</Link>
          </nav>
          <br />
          <br />
          <div className="container-item">
            <Routes>
              <Route
                path="/"
                element={<Home tasks={tasks} setTasks={setTasks} />}
              />
              <Route
                path="/tasks"
                element={<TasksList tasks={tasks} setTasks={setTasks} />}
              />
              <Route path="/stats" element={<Stats tasks={tasks} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

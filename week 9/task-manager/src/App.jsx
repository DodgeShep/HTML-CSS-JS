import { useState, useEffect } from 'react';
import TaskInput from './TaskInput.jsx';
import TaskList from './TaskList.jsx';
import FilterButtons from './FilterButtons.jsx';
import './styles.css';

function App() {
  // Load before rendering //
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  // Message when clearing completed //
  const [clearMessage, setClearMessage] = useState("");

  // All done message //
  const [allDoneMessage, setAllDoneMessage] = useState("");
 

  // Omg save it already //
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


   useEffect(() => {
    // Yay all done! //
    if (tasks.length > 0 && tasks.every(t => t.completed)) {
      setAllDoneMessage("All tasks completed! Good Job 🎉");

      const timer = setTimeout(() => {
        setAllDoneMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [tasks]);

// Hide the clear message after 3 seconds //
  useEffect(() => {
  if (!clearMessage) return;

  const timer = setTimeout(() => {
    setClearMessage("");
  }, 3000);

  return () => clearTimeout(timer);
}, [clearMessage]);

  return (
    <div className="app-container">
      <h1 className="title">Task Manager</h1>

      <TaskInput setTasks={setTasks} />

      <FilterButtons filter={filter} setFilter={setFilter} />

      <TaskList tasks={tasks} filter={filter} setTasks={setTasks} />

      <p className="task-counter">
        {tasks.filter(t => !t.completed).length} tasks remaining
      </p>

      <button
        className="clear-btn"
        onClick={() => {
          const completedCount = tasks.filter(t => t.completed).length;

          if (completedCount === 0) {
            setClearMessage("No completed tasks to clear.");
            return;
          }

          setTasks(prev => prev.filter(t => !t.completed));
          setClearMessage(
            `${completedCount} completed task${completedCount === 1 ? "" : "s"} cleared!`
          );
        }}
      >
        Clear Completed Tasks
      </button>

      {clearMessage && (
        <p className="clear-message">{clearMessage}</p>
      )}

      {allDoneMessage && (
        <p className="all-done-popup">{allDoneMessage}</p>
      )}


    </div>
  );
}

export default App;

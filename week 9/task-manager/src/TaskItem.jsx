function TaskItem({ task, setTasks }) {
  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      
      {/* Delete button */}
      <button className="delete-btn" onClick={deleteTask}>✕</button>

      {/* Center text + timestamp */}
      <div className="task-center">
        <span className="task-text">{task.text}</span>
        <span className="task-date">
         {new Date(task.createdAt).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric"
        })}
        </span>
      </div>

      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
        className="task-checkbox"
      />
    </div>
  );
}

export default TaskItem;


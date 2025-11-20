import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, filter, setTasks }) {
  
  
  
    // Filter //
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // "all"
  });

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p style={{ opacity: 0.6 }}>No tasks to show.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            setTasks={setTasks}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

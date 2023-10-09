// TrashTask
function TrashTask({ todo, todos, setTodos }) {
  const deleteTask = () => {
    const updatedTasks = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
  };

  return <button onClick={deleteTask}>Supprimer</button>;
}

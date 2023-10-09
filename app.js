// Import des hooks
const { useState, useEffect } = React;

// Composant fonctionnel
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Charger les tâches depuis le Local Storage lors du chargement de la page
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
    // Vérifier si le local storage est vide et afficher l'alerte si nécessaire
    if (savedTasks.length === 0) {
      alert(
        "Il n'y a aucune données enregistrées en local. Veuillez en ajouter !"
      );
    }
  }, []);

  // Sauvegarder les tâches dans le Local Storage à chaque modification
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Ajouter une tâche
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  // Supprimer une tâche
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Editer une tâche
  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  // Terminer une tâche
  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  // Affichage de l'application
  return (
    <div className="container pt-3">
      <h1 className="text-center text-light">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="input-group-append">
          <button type="button" class="btn btn-info" onClick={addTask}>
            Ajouter
          </button>
        </div>
      </div>
      <ul className="list-group pb-3">
        {tasks.map((task, index) => (
          <li key={index} className="text-dark list-group-item">
            <span
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button
              className="btn btn-warning mx-2 btn-sm"
              onClick={() =>
                editTask(index, prompt("Modifier la tâche :", task.text))
              }
            >
              Modifier
            </button>
            <button
              className="btn btn-danger mx-2 btn-sm"
              onClick={() => deleteTask(index)}
            >
              Supprimer
            </button>
            <button
              className="btn btn-success mx-2 btn-sm"
              onClick={() => toggleDone(index)}
            >
              {task.done ? "Annuler" : "Terminer"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Branchement des composants sur la root principal avec l'ID
ReactDOM.render(<App />, document.getElementById("root"));

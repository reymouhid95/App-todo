// DoneTask
function DoneTask({ onToggleDone, index, done }) {
  return (
    <button onClick={() => onToggleDone(index)}>
      {done ? "Annuler" : "Terminer"}
    </button>
  );
}

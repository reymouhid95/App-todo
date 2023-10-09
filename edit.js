// EditTask
function EditTask({ index, text, onEdit }) {
  const newText = prompt("Modifier la tâche :", text);
  if (newText !== null) {
    onEdit(index, newText);
  }
}

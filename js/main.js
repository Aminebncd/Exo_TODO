// avec la methode document.querySelector on attribue aux elements html des constantes
const addBtn = document.querySelector("#btn");
const taskCard = document.querySelector(".todoCard");
const taskContainer = document.querySelector("#todoCards");
const taskCountElement = document.querySelector("#taskCount");

// on crée le compteur et on l'initialise à 1
let taskCount = 1;

// quand on clique sur l'element btn, la fonction addTask() est executée
addBtn.addEventListener("click", addTask);

// On crée la fonction d’ajout
function addTask() {
  // on clone l’élément NewTask (à savoir la card créée en HTML)
  const newTask = taskCard.cloneNode(true);

  //on définit la valeur de la zone de texte afin qu’elle ne soit pas vide
  const newTextArea = newTask.querySelector(".task");
  //   newTextArea.value = "Nouvelle tâche";

  //On ajoute l’écouteur d’évènement sur l’élément cloné dans la fonction ajout, afin de faire fonctionner le bouton suppression sur les nouvelles cards
  const newDelBtn = newTask.querySelector(".delBtn");
  newDelBtn.addEventListener("click", function () {
    deleteTask(newTask);
  });

  //on ajoute cette nouvelle card dans le DOM
  taskContainer.appendChild(newTask);
  //   on incremente de 1 le nombre de tâches
  updateTaskCount(1);
}

// On crée la fonction de suppression
function deleteTask(task) {
  task.remove();
  //   on incremente de 1 le nombre de tâches
  updateTaskCount(-1);
}

// On crée la fonction de mise à jour du compteur
function updateTaskCount(change) {
  taskCount += change;
  //   on met à jour le nombre de tâches affichées en html dans le taskCount
  taskCountElement.textContent = `${taskCount} tâche${
    taskCount !== 1 ? "s" : ""
  }`;
}

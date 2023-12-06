// ho usato localStorage per salvare il nome utente, usando un contatore
// per continuare a salvare gli utenti con id crescente anche quando
// viene ricaricata la pagina.

// per il timer, ho usato session Storage

// USER & TIMER

let saveUserButton = document.querySelector("#save-btn");
let deleteUserButton = document.querySelector("#delete-btn");
let svuotaBtn = document.querySelector("#svuota-btn");
let timerDiv = document.querySelector("#timer span");
let lastUserDiv = document.querySelector("div.last-user");

let counter;

window.addEventListener("load", () => {
  initializeUserCounter();
  initializeTimer();
  clock();
});

saveUserButton.addEventListener("click", (e) => {
  e.preventDefault();
  addUser();
});

deleteUserButton.addEventListener("click", (e) => {
  e.preventDefault();
  lastUserDiv.innerText = "";
});

svuotaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
});

function initializeUserCounter() {
  let savedCounter = localStorage.getItem("counter");

  if (!savedCounter) {
    counter = 1;
    localStorage.setItem("counter", counter);
  } else {
    counter = savedCounter;
  }
}

function initializeTimer() {
  let savedTime = sessionStorage.getItem("time");
  if (!savedTime) {
    time = 1;
    sessionStorage.setItem("time", time);
  } else {
    time = savedTime;
  }
}

function clock() {
  setInterval(() => {
    sessionStorage.setItem("time", time);
    timerDiv.innerText = sessionStorage.getItem("time");
    time++;
  }, 1000);
}

function addUser() {
  let user = document.forms[0][0].value;
  if (user) {
    newUser = {
      id: counter,
      username: user,
    };

    lastUserDiv.innerText = newUser.username;
    localStorage.setItem(`user_${counter} `, JSON.stringify(newUser));
    counter++;
    localStorage.setItem("counter", `${counter}`);
  }
  document.forms[0][0].value = "";
}

// TO DO LIST
// prove di stateful

let taskSpace = document.querySelector("#listaTodo");
let addTaskBtn = document.querySelector("#todo-btn");

let tasksTot;

window.addEventListener("load", () => {
  initializeTasksCounter();
  retrieveSavedTasks();
  addRemoveButtons();
});

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addNewTask();
  addRemoveButtons();
  document.forms[1][0].value = "";
});

statefulSignAsDone();

function initializeTasksCounter() {
  let tasksCounter = localStorage.getItem("tasksTot");
  if (!tasksCounter) {
    tasksTot = 0;
    localStorage.setItem("tasksTot", tasksTot);
  } else {
    tasksTot = tasksCounter;
  }
}

function retrieveSavedTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith("task_")) {
      let oldTask = JSON.parse(localStorage.getItem(localStorage.key(i)));
      let li = document.createElement("li");

      let idFinder = localStorage.key(i).slice(5);
      li.innerHTML = `<div class="riga">${oldTask.taskName}</div> <button id="task-id-${idFinder}" class="remove-task btn btn-danger"> X </button>`;

      taskSpace.appendChild(li);

      if (oldTask.isDone && !li.classList.contains("done")) {
        li.children[0].classList.add("done");
      }
    }
  }
}

function addNewTask() {
  let newTask = document.forms[1][0].value;
  tasksTot++;
  localStorage.setItem("tasksTot", `${tasksTot}`);
  let li = document.createElement("li");
  li.innerHTML = `<div class="riga">${newTask}</div> <button id="task-id-${tasksTot}" class="remove-task btn btn-danger"> X </i></button>`;
  taskSpace.appendChild(li);

  let taskToSave = {
    taskName: newTask,
    isDone: false,
  };
  localStorage.setItem(`task_${tasksTot}`, JSON.stringify(taskToSave));
}

function addRemoveButtons() {
  let removeBtns = document.querySelectorAll(".remove-task");

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let targetId = e.target.id.slice(8);
      console.log(targetId);
      localStorage.removeItem(`task_${targetId}`);
      e.target.parentNode.remove();
    });
  });
}

function statefulSignAsDone() {
  taskSpace.addEventListener("click", (e) => {
    e.stopImmediatePropagation();

    if (e.target.classList.contains("riga")) {
      let idTask = e.target.nextElementSibling.id.slice(8);
      console.log(idTask);

      if (!e.target.classList.contains("done")) {
        e.target.classList.add("done");
        let fetchTask = JSON.parse(localStorage.getItem(`task_${idTask}`));
        fetchTask.isDone = true;
        console.log(fetchTask);
        localStorage.setItem(`task_${idTask}`, JSON.stringify(fetchTask));
      } else {
        e.target.classList.remove("done");
        let fetchTask = JSON.parse(localStorage.getItem(`task_${idTask}`));
        fetchTask.isDone = false;
        console.log(fetchTask);
        localStorage.setItem(`task_${idTask}`, JSON.stringify(fetchTask));
      }
    }
  });
}

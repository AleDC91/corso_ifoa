// // ho usato localStorage per salvare il nome utente, usando un contatore
// // per continuare a salvare gli utenti con id crescente anche quando
// // viene ricaricata la pagina.

// // per il timer, ho usato session Storage

// let saveBtn = document.querySelector("#save-btn");
// let delBtn = document.querySelector("#delete-btn");
// let svuotaBtn = document.querySelector("#svuota-btn");
// let timerDiv = document.querySelector("#timer span");



// console.log(localStorage);
// let counter;
// let lastUserDiv = document.querySelector("div.last-user");

// window.addEventListener("load", () => {
//   let savedCounter = localStorage.getItem("counter");
//   if (!savedCounter) {
//     counter = 1;
//     localStorage.setItem("counter", counter);
//     // console.log(`if: ${counter}`)
//   } else {
//     counter = savedCounter;
//     // console.log(`else: ${counter}`);
//   }

//   let savedTime = sessionStorage.getItem("time");
//   if (!savedTime) {
//     time = 1;
//     sessionStorage.setItem("time", time);
//   } else {
//     time = savedTime;
//   }
//   setInterval(() => {
//     sessionStorage.setItem("time", time);
//     timerDiv.innerText = sessionStorage.getItem("time");
//     time++;
//   }, 1000);
// });

// saveBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let user = document.forms[0][0].value;

//   if (user) {
//     newUser = {
//       id: counter,
//       username: user,
//     };

//     lastUserDiv.innerText = newUser.username;

//     localStorage.setItem(`user_${counter} `, JSON.stringify(newUser));

//     counter++;
//     localStorage.setItem("counter", `${counter}`);
//   }
// });

// delBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   lastUserDiv.innerText = "";
//   console.log(localStorage.key(`user_${localStorage.length}`));
// });

// svuotaBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   localStorage.clear();
// });

// To DO LIST

let taskSpace = document.querySelector("#listaTodo");
let addTaskBtn = document.querySelector("#todo-btn");

let tasksTot;




window.addEventListener("load", () => {
  let tasksCounter = localStorage.getItem("tasksTot");
  if (!tasksCounter) {
    tasksTot = 0;
    localStorage.setItem("tasksTot", tasksTot);
    // console.log(`if: ${tasksTot}`)
  } else {
    tasksTot = tasksCounter;
    // console.log(`else: ${tasksTot}`);

    for (let i = 0; i <= localStorage.length; i++) {

      if (localStorage.key(i).startsWith("task_")) {
        let oldTask = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let idFinder = localStorage.key(i).slice(5);
       
        console.log(idFinder)
        let li = document.createElement("li");

        if(oldTask.isDone){
            li.classList.add('done')
        }
        li.innerHTML = `<div class="riga">${oldTask.taskName}</div> <button id="task-id-${idFinder}" class="remove-task btn btn-danger"> X</button>`;
        taskSpace.appendChild(li);

      }
    }


  }


  let removeBtns = document.querySelectorAll(".remove-task");

  console.dir(removeBtns);
  removeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let targetId = e.target.id.slice(8);
        console.log(targetId);
        localStorage.removeItem(`task_${targetId}`)
        e.target.parentNode.remove();

    })
  })

  removeBtns = '';





});




addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newTask = document.forms[0][0].value;
  let li = document.createElement("li");
  li.innerHTML = `<div class="riga>${newTask}</div> <button id="task-id-${tasksTot}" class="remove-task btn btn-danger"> X </i></button>`;
  taskSpace.appendChild(li);

  tasksTot++;
  localStorage.setItem("tasksTot", `${tasksTot}`);

  let taskToSave = {
    taskName: newTask,
    isDone: false,
  };
  localStorage.setItem(`task_${tasksTot}`, JSON.stringify(taskToSave));

  let removeBtns = document.querySelectorAll(".remove-task");

  console.dir(removeBtns);
  removeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let targetId = e.target.id.slice(8);
        console.log(targetId);
        localStorage.removeItem(`task_${targetId}`)
        e.target.parentNode.remove();



    })
  })

  removeBtns = '';
});


taskSpace.addEventListener("click", (e) => {
    if(e.target.classList.contains('riga')){
        e.target.classList.toggle('done')}

    });
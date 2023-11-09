let tasksContainer = document.querySelector(".tasks-container");

let btn = document.querySelector("form button");
btn.addEventListener("click", (evt) => {
  let task = document.createElement("div");
  let newTask = document.createElement("p");
  let newDelBtn = document.createElement("button");
  let newLine = document.createElement("br");
  newDelBtn.innerText = "X";
  let form = document.forms;
  let text = form[0][0].value;
  newTask.innerText = text;
  task.appendChild(newTask);
  task.appendChild(newDelBtn);
  tasksContainer.appendChild(task);

  form[0][0].value = "";
  let deleteBtns = document.querySelectorAll(".tasks-container button");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let taskToRemove = e.target.parentNode;
      taskToRemove.remove();
    });
  });

  let wordsToRemove = document.querySelectorAll(".tasks-container p");
  wordsToRemove.forEach((word) => {
    word.addEventListener("click", (evt) => {
      let textToHide = evt.target;

      if(textToHide.style.textDecorationLine === "line-through"){
        textToHide.style.textDecorationLine = "";
      }else{
        textToHide.style.textDecorationLine = "line-through";
      }
    });
  });
});

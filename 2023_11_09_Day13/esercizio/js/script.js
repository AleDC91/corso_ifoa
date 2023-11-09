let tasksContainer = document.querySelector(".tasks-container");

let btn = document.querySelector("form button");
btn.addEventListener("click", (evt) => {
  let task = document.createElement("div");
  let newTask = document.createElement("p");
  let newDelBtn = document.createElement("button");
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

});
tasksContainer.addEventListener('click', (e) => {
    // console.dir(e.target)
    if(e.target.tagName === "P"){
        textToHide = e.target;
        if(textToHide.style.textDecorationLine === ""){
            textToHide.style.textDecorationLine = "line-through";
            textToHide.style.color = "#d1eed3"
        } else{
            textToHide.style.textDecorationLine = "";
            textToHide.style.color = "black"
        }
    }
})
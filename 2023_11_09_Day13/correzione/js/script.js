let btn = document.querySelector("#invia");

btn.addEventListener("click", () => {
  let input = document.querySelector("form input");
  let task = input.value.trim();
  if (task.length > 2) {
    // console.log(task);
    let li = document.createElement("li");
    // li.innerHTML = '<span>' +  task + '</span>';
    let span = document.createElement("span");
    span.innerText = task;
    span.addEventListener("click", function (e) {
      e.target.className =
        e.target.className === "completed" ? "" : "completed";
    });
    li.appendChild(span);
    let btn = document.createElement("button");
    btn.innerText = "x";
    btn.addEventListener("click", (e) => {
      //   console.log(e.target.parentNode);
      let li = e.target.parentNode;
      li.remove();
    });
    li.appendChild(btn);

    console.log(li);
    let ul = document.querySelector("ul");
    ul.appendChild(li);
    input.value = "";
  }
  // taskCompleted();
});

// function taskCompleted(){
//     let li = document.querySelectorAll('#lista ul li');
//     for(let i = 0; i < li.length; i++){
//         li[i].addEventListener('click', function(e) {
//             // this.classList.toggle('completed');
//             // e.target.classList.toggle('completed');
//             console.log(e.target);
//             e.target.className = e.target.className === "completed" ? "" : "completed";
//         })
//     }
// }

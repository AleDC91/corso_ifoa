let now = new Date();
let getYear = now.getFullYear();
let getMonth = now.getMonth();
let calendar = document.querySelector("#calendar");
let lastDayDate = new Date(getYear, getMonth + 1, 0); // sottraggo 1 al primo giorno del mese successivo. date conta i mesi partendo da zero.
let lastDayOfTheMonth = lastDayDate.getDate();
let appointments = [];

creaCalendario();
creaArrayAppuntamenti();

function creaCalendario() {
  let h2 = document.querySelector("h1 + h2");
  h2.innerText = nomeMese(getMonth + 1);
  // console.log(lastDayOfTheMonth);

  for (let i = 1; i <= lastDayOfTheMonth; i++) {
    const dayCellNode = document.createElement("div");
    dayCellNode.className = "day";
    dayCellNode.addEventListener("click", () => {
      // console.log(dayCellNode)
      selezionaGiorno(dayCellNode);
      // dayCellNode.classList.add("selected");
      let currentDayAppointments = appointments[i - 1];
      //   console.log(currentDayAppointments)

      showAppointments(i - 1);

      //   if(currentDayAppointments.length > 0){
      //   } else{
      //       document.querySelector('#appointments ul').style.display = "none";
      //   }
    });
    const day = document.createElement("h3");
    day.innerText = i;
    let today = now.getDate();
    if (i === today) {
      day.classList.add("color-epic");
    }
    dayCellNode.appendChild(day);
    calendar.appendChild(dayCellNode);
  }
}

function nomeMese(m) {
  switch (m) {
    case 1:
      return "Gennaio";
    case 2:
      return "Febbraio";
    case 3:
      return "Marzo";
    case 4:
      return "Aprile";
    case 5:
      return "Maggio";
    case 6:
      return "Giugno";
    case 7:
      return "Luglio";
    case 8:
      return "Agosto";
    case 9:
      return "Settembre";
    case 10:
      return "Ottobre";
    case 11:
      return "Novembre";
    case 12:
      return "Dicembre";
  }
}

function creaArrayAppuntamenti() {
  for (let i = 0; i < lastDayOfTheMonth; i++) {
    appointments[i] = [];
  }
}

function selezionaGiorno(day) {
  const calendar = document.querySelectorAll("#calendar div");
  for (let i = 0; i < lastDayOfTheMonth; i++) {
    calendar[i].className = "day";
    if (calendar[i] === day) {
      day.classList.add("selected");
    }
  }
}

function showAppointments(index) {
  document.querySelector("#appointments ul").style.display = "block";
  let btnSave = document.querySelector("form button");
  btnSave.addEventListener("click", () => saveMeeting(index));

  let selectedDayAppointments = appointments[index];
  // console.log(selectedDayAppointments)
  let ul = document.querySelector("#appointments ul");
  ul.innerHTML = "";
  selectedDayAppointments.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
}


function saveMeeting(index){
    let ul = document.querySelector("#appointments ul");
    ul.innerHTML = "";
    let day = index + 1;
    let ora = document.querySelector('input[name="time"]').value;
    let titolo = document.querySelector('input[name="title"]').value;
    console.log(ora, day, titolo);
    let evento = index+1 +'/' + (now.getMonth()+1)+ ' - ' + ora + ' - ' + titolo;
    appointments[index].push(evento)
}




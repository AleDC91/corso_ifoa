// ---------------
// ----EVENTI-----
// ---------------


function funClick(){
    console.log("click!!!!")
}


// ONCLICK SUL NODO
let btn2 = document.querySelector('#btn2');
// btn2.onclick = funClick;  // no parentesi tonde sennò parte subito e non quando premo il bottone
// oppure con funzione anonima o arrow function
btn2.onclick = () => console.log('click btn2')

//ADDEVENTLISTENER

let btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', funClick);

// o con funzione anonima/arrowFunction

// btn3.addEventListener('click', () => console.log('click btn3'));
// btn3.addEventListener('mouseover', () => console.log('passato sopra!'))
// btn3.addEventListener('mouseleave', () => console.log('tolto!'));

// console.dir(btn2)
// console.dir(btn3)


// ----------------------------
// -----FORM E VALIDAZIONE-----
// ----------------------------


let btn = document.querySelector('form button');
console.dir(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault();  // non mando i dati, submit non refresha la pagina, che sarebbe il suo comportamento di default
     let name = document.querySelector('input[name ="nome');
        //   console.log(name.value);
        if(name.value.trim().length >= 2){
            console.log(name.value + ' valido')
        } else {
            console.log(name.value + ' non valido')
        }
 })
 
 let form = document.forms;
 console.log(form)

 navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.error(`Error getting location: ${error.message}`);
    }
  );

  console.log(navigator.language);
  console.log(navigator.language);


// // fa qualcosa dopo un certo tempo
// setTimeout(() => {
//     alert("setTimeout")
// }, 3000)


// // fa qualcosa ogni tot tempo
// setInterval(() => {
//     console.log('interval')
// }, 1500)

//  clearTimeout e clearInterval

// let interval = setInterval(() => {
//     console.log('ciao');
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)





// DELEGATION
// ----------

// let btn1 = document.querySelector('#row1 button');
// btn1.addEventListener('click', (event) => {
//    console.log(event)})

// // invece di farlo per tutti i bottoni singolarmente, lo faccio in un ìa botta sola
// // posso applicare la funzione a tutti i bottoni
// // e sapere sempre chi ha scatenato l'evento
let btns = document.querySelectorAll('table button');
btns.forEach(b => b.addEventListener('click', (evt) => {
    console.log("Sono un btn della table");
    let tr = evt.target.parentNode.parentNode;
    console.dir(tr);
    tr.style.color = 'red'
}))


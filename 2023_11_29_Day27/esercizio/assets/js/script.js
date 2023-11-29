let nascondiSezione = document.querySelectorAll('.nascondi');

nascondiSezione.forEach(element => {
    element.addEventListener('click', () => {
        element.parentNode.parentNode.children[1].classList.toggle('hide-section');
        if(element.parentNode.parentNode.children[1].classList.contains('hide-section')){
            element.innerText = 'Mostra sezione';
        } else {
            element.innerText = 'Nascondi sezione';
        }
       })
});


// trip counter

let tripCounter = document.querySelectorAll('.card').length;


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert(`Nice, you have ${tripCounter} destinations!`, 'success')
  })
}


//  hot

let cards = document.querySelectorAll('.welcome-container .card');
console.dir(cards)
cards.forEach(card => {
    let hot = document.createElement('h6');
    card.appendChild(hot);
    hot.innerHTML = '<span class="badge bg-danger position-absolute top-0 end-0 m-2">HOT</span>'
})

// remove destinations

let removeDestinationsBtn = document.querySelector('#removeDestinations');
let allCards = document.querySelectorAll('.card');

removeDestinationsBtn.addEventListener('click', () => {
allCards.forEach( card => {
    card.classList.toggle('d-none')
})

})
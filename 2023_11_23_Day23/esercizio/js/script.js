let ultimaCard = document.querySelector('.card:last-child');
let penultimaCard = document.querySelector('.card:nth-child(4)')

window.addEventListener('resize', () => {
    let width = window.innerWidth;
console.log(width)
if(width < 576){
    ultimaCard.style.display = 'block';
    penultimaCard.style.display = 'block'
}
if(width > 576 && width < 1000){
    ultimaCard.style.display = 'none';
    penultimaCard.style.display = 'block'
}
if(width > 1000 && width < 1500){
    ultimaCard.style.display = 'none';
    penultimaCard.style.display = 'none';
}
if(width > 1500 && width < 1800){
    ultimaCard.style.display = 'block';
    penultimaCard.style.display = 'none';
}
if(width > 1800){
    ultimaCard.style.display = 'block';
    penultimaCard.style.display = 'block'
}

})
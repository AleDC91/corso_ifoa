let nascondiSezione = document.querySelectorAll('section p:first-of-type');

nascondiSezione.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.children[1].classList.toggle('hide-section')
       })
});

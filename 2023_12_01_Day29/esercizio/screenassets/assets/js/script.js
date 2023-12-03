let difficulties = document.querySelectorAll('.time-diff span');

let beginner = `<svg class="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
<rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
<rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
</svg>`

let intermediate = `<svg class="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none"
xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
<rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
<rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
</svg>`

let advance = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE" "></rect>
<rect x=" 7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
<rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
</svg>

`

difficulties.forEach( difficulty => {

    let iconElement = document.createElement('span');
    iconElement.classList.add('mb-1','ms-2');


    switch (difficulty.textContent.toLocaleLowerCase()) {
        case 'advance':
            iconElement.innerHTML = advance;
            iconElement.children[0].classList.add('img-fluid')
            iconElement.children[0].style.width = '19px';
            iconElement.children[0].style.heigth = '19px';
            difficulty.parentNode.insertBefore(iconElement, difficulty);
            break;

        case 'intermediate':
            iconElement.innerHTML = intermediate;
            iconElement.children[0].classList.add('img-fluid')
            iconElement.children[0].style.width = '19px';
            iconElement.children[0].style.heigth = '19px';
            difficulty.parentNode.insertBefore(iconElement, difficulty);
            break;
        case 'beginner':
            iconElement.innerHTML = beginner;
            iconElement.children[0].classList.add('img-fluid')
            iconElement.children[0].style.width = '19px';
            iconElement.children[0].style.heigth = '19px';
            difficulty.parentNode.insertBefore(iconElement, difficulty);
            break;
    }
})
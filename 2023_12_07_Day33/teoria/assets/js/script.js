// -----------------
// --CHIAMATE AJAX--
// -----------------

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');  // definisco il metodo  e URL della chiamata
xhr.send(); // eseguo la chiamata                          // readyState = 2 -> quando eseguo la chiamata
xhr.onreadystatechange = function(){                       // readyState = 3 -> loading
    if(xhr.readyState == 4){                               // readyState = 4 -> done                     
        console.log('The operation is complete');
        let json = xhr.responseText;
        let obj = JSON.parse(json)
        console.log(json)
        createList(obj);
    }
}


function createList(users){
   let divUsers = document.querySelector('.users');
   users.forEach(user => {
    let p = document.createElement('p');
    p.innerText = user.name + ' --------- '  + user.email;
    divUsers.appendChild(p);
    
   });
}
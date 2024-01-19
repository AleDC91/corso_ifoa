import axios from 'axios';

export const deleteUser = (user) => {
    return { type: 'REMOVE_USER' , payload: user }
}

export const addUser = (user) => {
    //return { type: 'ADD_USER' , payload: user } 
    // Con Redux Thunk ho la possibilità di effettuare controlli prima di emettere una a azione
    return (dispatch, getState) => { // function(dispatch, state) {} => (dispatch, state) => {}
        // getState ritorna lo stato contenuto nell store
        console.log(getState());
        // findIndex cerca un oggetto in un array, se lo trova mi restituisce l'indice altrimenti -1
        // find cerca un oggetto in un array, se lo trova mi restituisce l'oggetto' altrimenti null
        if(getState().users.findIndex(u => u.email === user.email) < 0) {
            dispatch({ type: 'ADD_USER' , payload: user })
        } else {
            console.log("Email già usata!!!")
        }
    }
}

export const getAllUsers = () => {
    // Con Redux Thunk ho la possibilità di effettuare chiamate 
    // asincrone prima di inviare una azione
    return function(dispatch, getState) { // function(dispatch, state)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if(response.ok)
                    return dispatch({ type: 'GET_ALL_USERS' , payload: response.data})
            })
    }
        
}

export const deleteUser = (user) => {
    return { type: 'REMOVE_USER' , payload: user }
}

export const addUser = (user) => {
    return { type: 'ADD_USER' , payload: user }
}
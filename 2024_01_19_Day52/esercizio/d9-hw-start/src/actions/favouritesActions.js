export const removeFavourite = (company) => {
    return { type: 'REMOVE_FAVOURITE' , payload: company }
}

export const addFavourite = (company) => {
    return { type: 'ADD_FAVOURITE' , payload: company }
}
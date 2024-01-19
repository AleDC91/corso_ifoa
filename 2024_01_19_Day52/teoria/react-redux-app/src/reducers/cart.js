export default function cartReducer(state = [], action) {
  
    console.log(action)

    switch (action.type) {
        case 'REMOVE_CART':
            return state // cart: []
        case 'ADD_CART':
            return state // cart: []
    
        default:
            break;
    }

    return state;
}
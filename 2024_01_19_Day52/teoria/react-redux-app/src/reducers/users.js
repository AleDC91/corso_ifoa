// storeReducer(initialState, action)
export default function usersReducer(state = [], action) {
  
    console.log(action)

    switch (action.type) {
        case 'REMOVE_USER':
          return state.filter(u => u.email !== action.payload.email)
          
        case 'ADD_USER':
          return [ ...state, action.payload ]

        case 'GET_ALL_USERS': {
          return [ ...action.payload ]
        }
        
        default:
          break;
    }

    return state;
}

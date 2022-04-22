// // Сопособ посредством localStorage
// const localStorageUserStr = localStorage.getItem('user');

// const localStorageUser = localStorageUserStr ?
//   JSON.parse(localStorageUserStr).userCreatedOrLoggining :
//   undefined;

// const initialState = { user: localStorageUser, infoFromBack: '' }

const initialState = { user: undefined, infoFromBack: '' }

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_OR_LOGIN_USER':
      return {...state, user: action.payload.userCreatedOrLoggining,
        infoFromBack: action.payload.message}

        case 'CLEAR_MESSAGE':
          return {...state, infoFromBack: ''}
    
        case 'LOGOUT_USER':
          return {...state, user: undefined}
        
        case 'LOGGEDIN_USER':
          const res = {...state, user: action.payload} 
          return {...state, user: action.payload} 
          
    default:
      return state
  }

}

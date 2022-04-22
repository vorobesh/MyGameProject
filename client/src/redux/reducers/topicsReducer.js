const initialState = { topics: [], points: 0};

export function topicsReducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT_TOPICS':
      return { ...state, topics: action.payload }
      
    case 'EDIT_POINTS' :
      return {...state, points: state.points + action.payload }

    default:
      return state
  }
}

// hello

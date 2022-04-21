const initialState = { topics: [] };

export function gameBoardReducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT_TOPICS':
      return { ...state, topics: action.payload }
    default:
      return state
  }
}

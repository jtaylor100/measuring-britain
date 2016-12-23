import { NavVisibility } from './actions'

const initialState = {
	navVisibility: NavVisibility.OPEN
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { ...state, navVisibility: action.visibility }
    default:
      return state
  }
}

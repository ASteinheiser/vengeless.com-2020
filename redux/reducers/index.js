import _cloneDeep from 'lodash.clonedeep'

const initialState = {
  theme: 'light'
}

const basicReducer = (state = initialState, { type, payload }) => {

  let newState

  switch(type) {

    case 'TOGGLE_THEME':
      newState = _cloneDeep(state)

      newState.theme = state.theme === 'light' ? 'dark' : 'light'

      return newState

    default:
      return state
  }
}

export default basicReducer
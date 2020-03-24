import { combineReducers } from 'redux';

const initialState = {
}

const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

const reducer = combineReducers({
  globalReducer
});

export default reducer
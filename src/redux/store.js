import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    ...reducer
  }),
  process.env.NODE_ENV == 'production' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))
)

export default store
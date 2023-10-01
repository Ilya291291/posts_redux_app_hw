import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import postsReducer from './posts/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  postsReducer,
  usersReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

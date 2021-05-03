import { createStore, applyMiddleware } from 'redux';
import { myThunk }  from '../middleware/thunk'
// import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(myThunk));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;

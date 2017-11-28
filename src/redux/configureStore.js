
import {
  createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from 'redux';
import * as clientStore from './modules/clients';
import createDebounce from 'redux-debounce';

function test(store, { thing }) {
    store.dispatch({
        type: clientStore.types.RENDER_TESTS,
        payload: { thing },
    });
}

const testDataMiddleware = store => next => (action) => {
  if (!action.meta) {
    return next(action);
  }

  const consumed = { ...action };
  delete consumed.meta;

  switch (action.type) {
    case clientStore.types.TEST:
      test(store, { ...action.meta });
      return next(consumed);
    default:
      break;
  }

  return next(action);
};

export const configureStore = () => {
  const debounceConfig = { filter: 300 };
  const debouncer = createDebounce(debounceConfig);
    const reducer = combineReducers({
        clients: clientStore.reducer,
    });
    const store = createStore(reducer, applyMiddleware(debouncer, testDataMiddleware));
  const actions = {
    clients: bindActionCreators(clientStore.actions, store.dispatch),
  };

  return { store, actions };
};

export default configureStore;

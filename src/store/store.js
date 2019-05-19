import { createStore } from 'redux'
import { rootReducer } from '../reducers/reducers';
import { loadState, saveState } from '../localstorage/localStorage';

const localState = loadState();
export const store = createStore(rootReducer, localState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState());
});


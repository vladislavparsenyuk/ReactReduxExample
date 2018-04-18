import { createStore } from 'redux';
import reducers from 'store/reducers';

const store = createStore(reducers);

store.subscribe(() => { console.log(store.getState()) });

export default store;
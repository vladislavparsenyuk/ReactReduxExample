import store from 'store';
import types from 'store/action-types';

export default {
    toggleTree() {
        store.dispatch({
            type: types.TOGGLE_TREE,
        });
    }
};
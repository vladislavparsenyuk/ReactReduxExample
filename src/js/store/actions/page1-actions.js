import store from 'store';
import types from 'store/action-types';

export default {
    changeValue(val) {
        store.dispatch({
            type: types.CHANGE_VALUE,
            value: val,
        });
    },

    shuffle() {
        store.dispatch({
            type: types.SHUFFLE,
        });
    },

    unShuffle() {
        store.dispatch({
            type: types.UNSHUFFLE,
        });
    }
};
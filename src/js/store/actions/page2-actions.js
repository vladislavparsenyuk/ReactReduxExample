import store from 'store';
import types from 'store/action-types';

export default {
    dataFetchStart() {
        store.dispatch({
            type: types.DATA_FATCH_START,
        });
    },
    dataFetchSuccess(data) {
        store.dispatch({
            type: types.DATA_FATCH_SUCCESS,
            data: data,
        });
    },
};
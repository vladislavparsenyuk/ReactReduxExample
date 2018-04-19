import types from 'store/action-types';

const defaultState = {
    title: 'Page 2',
    isFached: false,
    loading: false,
    data: {},
    dataUrl: '/json/data.json',
};

export default (state = defaultState, action) => {
    var newState = { ...state };

    switch (action.type) {
        case types.DATA_FATCH_START:
            newState.loading = true;
            break;
        
        case types.DATA_FATCH_SUCCESS:
            newState.data = action.data;
            newState.loading = false;
            newState.isFached = true;
            break;
    }
    
    return newState;
};
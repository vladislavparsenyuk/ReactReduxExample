import types from 'store/action-types';

const defaultState = {
    title: 'Home page',
    isTreeHidden: true,
};

export default (state = defaultState, action) => {
    var newState = {...state};

    switch (action.type) {
        case types.ACTION_1:
            Object.assign(newState, action.data);
            break;
        
        case types.TOGGLE_TREE:
            newState.isTreeHidden = !state.isTreeHidden;
            break;
    }

    return newState;
};
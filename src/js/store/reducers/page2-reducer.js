import types from 'store/action-types';

const defaultState = {
    title: 'Page 2',
};

export default (state = defaultState, action) => {
    var newState = { ...state };
    
    return newState;
};
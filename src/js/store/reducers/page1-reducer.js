import types from 'store/action-types';

const defaultState = {
    title: 'Page 1',
    value: '',
    valueShuffled: shuffle('Hello'),
    isShuffled: false,
};

function shuffle(value) {
    return value.split('').sort((a, b) => {
        return Math.round(Math.random() * 2 - 1);
    }).join('');
};

export default (state = defaultState, action) => {
    var newState = { ...state };
    
    switch (action.type) {
        case types.CHANGE_VALUE:
            newState.value = action.value;
            newState.valueShuffled = shuffle(action.value);
            break;
        
        case types.SHUFFLE:
            newState.isShuffled = true;
            newState.valueShuffled = shuffle(state.value);
            break;

        case types.UNSHUFFLE:
            newState.isShuffled = false;
            break;
    }

    return newState;
};
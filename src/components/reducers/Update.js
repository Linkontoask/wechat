import * as types from '../constants/ActionTypes';

const initialState = {
    index: 0,
    text: '微信',
    value: false
};
let oldIndex = 0;
export const UpdateNav = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_INDEX:
            oldIndex = action.index;
            return {
                ...state,
                index: action.index
            };
        case types.FETCH_NAME:
            return {
                ...state,
                text: action.text,
                old: oldIndex
            };
        case types.SCREEN_SHOW:
            return {
                ...state,
                value: action.value
            };
        default: return state;
    }
};

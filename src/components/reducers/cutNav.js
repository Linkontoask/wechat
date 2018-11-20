import * as types from '../constants/ActionTypes';

const initialState = {
    index: 0,
    text: '微信'
};

export const UpdateNav = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_INDEX:
            return {
                ...state,
                index: action.index
            };
        case types.FETCH_NAME:
            return {
                ...state,
                text: action.text
            };
        default: break;
    }
};

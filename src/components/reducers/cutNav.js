import * as types from '../constants/ActionTypes';

const initialState = {
    index: 0
};

export const UpdateNav = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_INDEX:
            return {
                ...state,
                index: action.index
            };
        default: break;
    }
};

import * as types from '../constants/ActionTypes';

const initialState = {
    index: 0,
    text: '微信',
    value: false
};
let initState = ['微信','通讯录'];
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
        case types.SCREEN_SHOW:
            return {
                ...state,
                value: action.value,
                text: initState[state.index]
            };
        default: return state;
    }
};

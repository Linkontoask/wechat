import * as types from '../constants/ActionTypes'

export const NavIndex = index => {
    return {
        type: types.UPDATE_INDEX,
        index: index
    }
};

export const Name = Text => {
    return {
        type: types.FETCH_NAME,
        text: Text
    }
};

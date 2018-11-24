import * as types from '../constants/ActionTypes'

export const NavIndex = index => {
    return {
        type: types.UPDATE_INDEX,
        index: index
    }
};

export const FixedPage = Text => {
    return {
        type: types.FETCH_NAME,
        text: Text
    }
};

export const ShowScreen = bool => {
    return {
        type: types.SCREEN_SHOW,
        value: bool
    }
};

export const PositionCurrent = posX => {
    return {
        type: types.POS_CURRENT,
        currentIndex: posX
    }
};

export const ChatMainPos = posX => {
    return {
        type: types.CHAT_MAIN_POS,
        left: posX
    }
};
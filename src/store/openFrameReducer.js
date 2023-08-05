const ADD_OPEN_FRAME = "ADD_OPENFRAME";
const REMOVE_OPEN_FRAME = "REMOVE_OPENFRAME";
const SET_ACTIVE_FRAME = "SET_ACTIVE_FRAME";

const defaultState = {
    opened: [],
    active: 0,
}

export const openFrameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_OPEN_FRAME:
            return { ...state, opened: [...state.opened, action.payload] }
        case REMOVE_OPEN_FRAME:
            return { ...state, opened: state.opened.filter(opened => opened.id !== action.payload) }
        case SET_ACTIVE_FRAME:
            return { ...state, active: action.payload }
        default:
            return state
    }
}

export const addOpenFrameAction = (payload) => ({ type: ADD_OPEN_FRAME, payload })
export const removeOpenFrameAction = (payload) => ({ type: REMOVE_OPEN_FRAME, payload })
export const setActiveFrameAction = (payload) => ({ type: SET_ACTIVE_FRAME, payload })
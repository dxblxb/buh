const SET_FILTER_CAT = "SET_FILTER_CAT";

const defaultState = {
  filterCat: "all"
};

export const catFilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER_CAT:
      return { ...state, filterCat: action.payload };
    default:
      return state;
  }
};

export const setFilterCatAction = (payload) => ({
  type: SET_FILTER_CAT,
  payload
});

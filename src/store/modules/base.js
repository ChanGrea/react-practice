import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";

// action types
const CLICK_MENU = "CLICK_MENU";

// action creators
export const clickMenu = createAction(CLICK_MENU);

// initial state
const initialState = Map({
  activeItem: "Aporia Viewer"
});

// reducer
export default handleActions(
  {
    [CLICK_MENU]: (state, action) => {
      return state.set("activeItem", action.payload.activeItem);
    }
  },
  initialState
);

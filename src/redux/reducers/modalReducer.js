import {
  CHANGE_ALERT_MODAL_STATE,
  CHANGE_EDIT_MODAL_STATE,
  CHANGE_MODAL_STATE,
  SET_DELETE_OBJECT,
  SET_EDIT_OBJECT,
} from "../consts";

const initialState = {
  isOpened: false,
  isEditOpened: false,
  editObject: {},
  isAlertOpened: false,
  objectToDelete: {},
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_OBJECT:
      return {
        ...state,
        editObject: action.payload,
      };
    case SET_DELETE_OBJECT:
      return {
        ...state,
        objectToDelete: action.payload,
      };
    case CHANGE_EDIT_MODAL_STATE:
      return {
        ...state,
        isEditOpened: action.payload,
      };
    case CHANGE_ALERT_MODAL_STATE:
      return {
        ...state,
        isAlertOpened: action.payload,
      };
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        isOpened: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

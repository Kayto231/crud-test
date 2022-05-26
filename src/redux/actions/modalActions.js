import {
  CHANGE_ALERT_MODAL_STATE,
  CHANGE_EDIT_MODAL_STATE,
  CHANGE_MODAL_STATE,
  SET_DELETE_OBJECT,
  SET_EDIT_OBJECT,
} from "../consts";

export const changeModalStateAction = (state) => ({
  type: CHANGE_MODAL_STATE,
  payload: state,
});

export const changeEditModalStateAction = (state) => ({
  type: CHANGE_EDIT_MODAL_STATE,
  payload: state,
});

export const setEditObjectAction = (obj) => ({
  type: SET_EDIT_OBJECT,
  payload: obj,
});

export const changeAlertModalState = (state) => ({
  type: CHANGE_ALERT_MODAL_STATE,
  payload: state,
});

export const setObjectToDeleteAction = (obj) => ({
  type: SET_DELETE_OBJECT,
  payload: obj,
});

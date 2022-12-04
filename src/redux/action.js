import * as types from "./actionTypes";

export const loadUsersStart = () => {
  return {
    type: types.LOAD_USERS_START,
  };
};

export const loadUserSucces = (users) => {
  return {
    type: types.LOAD_USERS_SUCESS,
    payload: users,
  };
};

export const loadUserError = (error) => {
  console.warn(error);
  return {
    type: types.LOAD_USERS_ERROR,
    payload: error,
  };
};

export const createUserStart = (user) => {
  return {
    type: types.CREATE_USER_START,
    payload: user,
  };
};

export const createUserSucces = () => {
  return {
    type: types.CREATE_USER_SUCCESS,
  };
};

export const createUserError = (error) => {
  console.warn(error);
  return {
    type: types.CREATE_USER_ERROR,
    payload: error,
  };
};

export const deleteUserStart = (userId) => {
  return {
    type: types.DELETE_USER_START,
    payload: userId,
  };
};

export const deleteUserSucces = (userId) => {
  return {
    type: types.DELETE_USER_SUCCESS,
    payload: userId,
  };
};

export const deleteUserError = (error) => {
  console.warn(error);
  return {
    type: types.DELETE_USER_ERROR,
    payload: error,
  };
};

export const updateUserStart = (userInfo) => {
  return {
    type: types.UPDATE_USER_START,
    payload: userInfo,
  };
};

export const updateUserSucces = () => {
  return {
    type: types.UPDATE_USER_SUCCESS,
  };
};

export const updateUserError = (error) => {
  console.warn(error);
  return {
    type: types.UPDATE_USER_ERROR,
    payload: error,
  };
};

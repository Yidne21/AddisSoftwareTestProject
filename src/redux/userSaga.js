import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
import * as types from "./actionTypes";
import {
  loadUserError,
  loadUserSucces,
  createUserError,
  createUserSucces,
  deleteUserError,
  deleteUserSucces,
  updateUserError,
  updateUserSucces,
} from "./action";
import {
  loadUsersApi,
  creaeteUserApi,
  deleteUserApi,
  updateUserApi,
} from "./api";

function* onloadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSucces(response.data));
    }
  } catch (error) {
    yield put(loadUserError(error.response.data));
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(creaeteUserApi, payload);
    if (response.status === 200) {
      yield put(createUserSucces(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield put(deleteUserSucces(userId));
      yield delay(500);
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

function* onUpdateUserStartAsync({ payload: { id, ...formvalue } }) {
  try {
    const response = yield call(updateUserApi, id, formvalue);
    if (response.status === 200) {
      yield put(updateUserSucces());
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

function* onLoadUser() {
  yield takeEvery(types.LOAD_USERS_START, onloadUsersStartAsync);
}

function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

const userSaga = [
  fork(onLoadUser),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function* rootSaga(onCreateUser) {
  yield all([...userSaga]);
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

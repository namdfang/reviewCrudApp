import * as actions from "./ListUser.actions";
import { getListUser, postUser, deleteUserById, editUserById } from "../../apis/user";

export const getAllUser = () => (dispatch) => {
  return getListUser()
    .then((res) => {
      dispatch(actions.getListUser(res));
    })
    .catch((err) => {
      // Promise.reject(dispatch(actions.getDocumentListFailed(err)))
      console.log("abc", err);
    });
};

export const createUser = (user) => (dispatch) => {
  return postUser(user)
    .then((res) => {
      dispatch(actions.createUser(res));
    })
    .catch((err) => {
      // Promise.reject(dispatch(actions.getDocumentListFailed(err)))
      console.log("abc", err);
    });
};

export const deleteUser = (id) => (dispatch) => {
  return deleteUserById(id)
    .then((res) => {
      dispatch(actions.deleteUser(res))
    })
}

export const handleEditUser = (user, id) => (dispatch) => {
  return editUserById(user,id)
    .then((res) => {
      dispatch(actions.editUser(res))
    })
}

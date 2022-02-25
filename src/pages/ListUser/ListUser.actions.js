import * as types from "./ListUser.constants";

export const getListUser = (payload) => ({
    type: types.LIST_USER,
    payload,
});

export const createUser = (payload) => ({
    type: types.ADD_USER,
    payload,
});

export const editUser = (payload) => ({
    type: types.EDIT_USER,
    payload,
})

export const deleteUser = (payload) => ({
    type: types.DELETE_USER,
    payload,
})
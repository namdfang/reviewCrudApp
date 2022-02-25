import produce from "immer";
import * as types from "./ListUser.constants";
const initialState = {
    listUser : [],
};

export const userReducer = (state = initialState, action) => 
    produce(state,(draft) => {
        switch(action.type){
            case types.LIST_USER:
                draft.listUser = action.payload;
                break;
            case types.ADD_USER:
                draft.listUser.push(action.payload);
                break;
            case types.EDIT_USER:
                const index = draft.listUser.findIndex((item) => item.id === action.payload.id);
                draft.listUser[index] = action.payload
                break;
            case types.DELETE_USER:
                const newListUser = draft.listUser.filter((item) => item.id !== action.payload.id);
                draft.listUser = newListUser;
                break;
            default:
                return state;
        }
    })

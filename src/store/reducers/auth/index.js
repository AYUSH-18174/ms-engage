import { GET_USER, SET_USER } from "../../actionTypes";

const initialState = {
  username: JSON.parse(localStorage.getItem("username")) ?? "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const username = action.data;
      return {
        ...state,
        username,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

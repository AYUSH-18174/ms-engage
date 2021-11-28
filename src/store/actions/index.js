import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "../../utils/apis";
import { SET_USER } from "../actionTypes";

export const loginUser = (data) => {
  return {
    type: SET_USER,
    data: data,
  };
};

export const signUpUser = (data) => {
  return {
    type: SET_USER,
    data: data,
  };
};

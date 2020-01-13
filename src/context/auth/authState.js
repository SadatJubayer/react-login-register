import React, { userReducer, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    errors: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user

  // register user

  // login user

  // logout user

  // clear erros

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        erros: state.errors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

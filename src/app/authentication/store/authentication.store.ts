import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export interface AuthenticationStore {
  authenticationData: AuthenticationData
}

export interface AuthenticationData {
  logged: boolean;
  login: string;
  email: string;
  role: string;
}

export const loginAction = createAction("[Authentication] login", props<{ data: AuthenticationData }>());

const initState: AuthenticationStore = {
  authenticationData: {
    logged: false,
    login: "",
    email: "",
    role: ""
  }
};

export const authenticationReducer = createReducer(
  initState,
  on(loginAction, (state, {data}) => ({authenticationData: data}))
);

const selectAuthenticationState = createFeatureSelector<AuthenticationStore>("authenticationStore");
export const selectAuthenticationData = createSelector(selectAuthenticationState, (state) => state.authenticationData);

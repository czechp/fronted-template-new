import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export interface StatementState {
  message: string,
  error: boolean
}

export interface StatementMessage {
  message: string,
  error: boolean
}

export const setMessage = createAction("[Statement] set message", props<{ msg: StatementMessage }>());

const initState: StatementState = {
  message: "",
  error: false
};

export const statementReducer = createReducer(
  initState,
  on(setMessage, (state, {msg}) => ({message: msg.message, error: msg.error}))
);

const selectStatementState = createFeatureSelector<StatementState>("statementStore");
export const selectStatement = createSelector(selectStatementState, (state) => state);


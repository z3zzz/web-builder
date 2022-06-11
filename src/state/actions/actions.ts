import { ActionType } from "../action-types";

export interface InsertAction {
  type: ActionType.INSERT;
  payload: {};
}

export type Action = InsertAction;

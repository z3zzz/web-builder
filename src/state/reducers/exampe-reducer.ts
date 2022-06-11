import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface State {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: string;
  };
}

const initialState: State = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = (state: State = initialState, action: Action): State => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.INSERT:
        //const { id, content } = action.payload;
        //draft.data[id].content = content;
        break;

      default:
        break;
    }
  });
};

export default reducer;

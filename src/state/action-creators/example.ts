import { ActionType } from '../action-types';
import * as Api from '../../utils/api';
import { RootState, AppDispatch } from '../';

export const insert = (id: string | null): any => {
  return {
    type: ActionType.INSERT,
    payload: {
      id,
    },
  };
};

export const fetch = () => {
  return async function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch({
      type: ActionType.INSERT,
      payload: {},
    });

    try {
      //const { data }: { data: Cell[] } = await Api.get("api/cells");
      //dispatch({
      //type: ActionType.FETCH_CELLS_COMPLETE,
      //payload: data,
      //});
    } catch (err: any) {
      //dispatch({
      //type: ActionType.FETCH_CELLS_ERROR,
      //payload: err.message,
      //});
    }
  };
};

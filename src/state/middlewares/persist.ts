import { Dispatch } from 'redux';
import { Action } from '../actions';
import { RootState } from '../reducers';

export const persist = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: any;

  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if (timer) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          console.log('persisted');
        }, 500);
      }
    };
  };
};

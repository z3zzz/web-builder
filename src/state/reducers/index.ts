import { combineReducers } from 'redux';
import reducer from './exampe-reducer';

const reducers = combineReducers({
  example: reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import acountReducer from './acountReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  acount: acountReducer,
});

export default rootReducer;

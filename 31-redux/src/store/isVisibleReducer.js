const CHANGE = 'counter/CHANGE';
const initialState = true;

export const change = () => ({ type: CHANGE });

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state;
  }
  return state;
};

export default isVisibleReducer;

const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

const initialState = {
  money: 0,
  msg: '',
};

export const deposit = (payload) => {
  return {
    type: DEPOSIT,
    payload,
  };
};
export const withdraw = (payload) => {
  return {
    type: WITHDRAW,
    payload,
  };
};

const acountReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      console.log('montype', typeof state.money);
      return {
        money: state.money + Number(action.payload),
        msg: '성공적으로 입금되었습니다.',
      };
    case WITHDRAW:
      console.log('paytype', typeof action.payload);
      if (state.money - Number(action.payload) < 0) {
        return {
          money: state.money,
          msg: '잔액이 부족합니다.',
        };
      } else {
        return {
          money: state.money - Number(action.payload),
          msg: '성공적으로 인출되었습니다.',
        };
      }
    default:
      return state;
  }
};

export default acountReducer;

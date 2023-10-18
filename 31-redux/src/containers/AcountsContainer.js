import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deposit, withdraw } from '../store/acountReducer';

export const AcountsContainer = () => {
  const dispatch = useDispatch();

  let [number, setNumber] = useState(0);
  const inquiryAccount = useSelector((state) => state.acount.money);
  const msgAcount = useSelector((state) => state.acount.msg);

  const onClickDepositHandler = () => {
    dispatch(deposit(number));
    setNumber('');
  };
  const onClickWithdrawHandler = () => {
    dispatch(withdraw(number));
    setNumber('');
  };

  return (
    <>
      <h1>React Redux 실습</h1>
      <hr />

      <h1>코딩온 은행</h1>
      <h2>잔액 : {inquiryAccount}</h2>
      <h2>{msgAcount}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={onClickDepositHandler}>입금</button>
      <button onClick={onClickWithdrawHandler}>출금</button>
    </>
  );
};

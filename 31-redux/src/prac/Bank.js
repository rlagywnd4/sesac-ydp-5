import React from 'react';
import { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { depositMoney } from '../store/acountReducer';
import { useDispatch } from 'react-redux';
import { AcountsContainer } from '../containers/AcountsContainer';

export default function Bank() {
  return (
    <div>
      <AcountsContainer />
    </div>
  );
}

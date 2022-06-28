import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, restart } from '../../../store/slices/counterSlice';

export const Counter = () => {
  const { value } = useSelector((state:any) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h3>Counter: { value }</h3>

        <button onClick={ () => dispatch(increment()) }>+1</button>
        <button onClick={ () => dispatch(decrement()) }>-1</button>
        <button onClick={ () => dispatch(restart()) }>Reset</button>
      </div>
    </>
  );
};
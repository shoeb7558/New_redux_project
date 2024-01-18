import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showcounter)

  const incrementhandler = () => {
    dispatch(counterActions.increment())
  }
  const increasehandler = () => {
    dispatch( counterActions.increase(5))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={increasehandler}>Increaseby5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

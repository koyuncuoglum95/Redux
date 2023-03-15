import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { counterActions } from '../store/counter';



const Counter = () => {

  // useSelector() is used to connect the state from another files (index.js)
  // useDispatch() is used to demonstrate the value of the connected state from another files (index.js)
  // Both useSelector() and useDispatch() can be used for react and redux at the same time.
  
  // state.counter.counter : the first counter is the indentifer from configureStore.
   const counter = useSelector(state => state.counter.counter);
   const dispatch = useDispatch();
   const showCounter = useSelector(state => state.counter.showCounter)
  
   const toggleCounterHandler = () => {
     dispatch(counterActions.toggleCounter());
  };
  
    const incrementHandler = () => {
      dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
      dispatch(counterActions.increase(10)); // 10 is the payload
    };
  
    const decrementHandler = () => {
      dispatch(counterActions.decrement());
    };
  
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter &&<div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  };

 export default Counter;
 
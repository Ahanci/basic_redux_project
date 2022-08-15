import { useSelector,useDispatch } from 'react-redux/es/exports';
import classes from './Counter.module.css';
import {counterActions} from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=> state.counter.counter);
  const show= useSelector(state=> state.counter.showCounter)

  const incremenetHandler= ()=>{
    dispatch(counterActions.increment())

  }
  const decrementHandler= ()=>{
    dispatch(counterActions.decrement()) // {type: some_unique_identifier, payload:10} toolkit does this execution for us automatically
    
  }
  const increaseHandler= ()=>{
    dispatch(counterActions.increase(10))

  }
  const decreaseHandler= ()=>{
    dispatch(counterActions.decrease(10))
    
  }
  
  
  
  const toggleCounterHandler = () => {
   dispatch(counterActions.toggleCounter())

  };

  // const buttonClasses= open ? 'classes.hide': '';
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incremenetHandler} >INCREMENT</button>
        <button onClick={ decrementHandler } >DECREMENT</button>
        <button onClick={ increaseHandler} >INCREMENT 5</button>
        <button onClick={decreaseHandler } >DECREMENT 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

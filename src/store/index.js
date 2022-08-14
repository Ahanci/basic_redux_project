import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'; // added this because it is powerful

const initialState= { counter: 0, showCounter:true };

const counterSlice= createSlice({
  name:'counter', //can be any name
  initialState,
  reducers:{
    increment (state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter= state.counter + action.payload
    },
    decrease(state, action){
      state.counter= state.counter - action.payload
    },
    toggleCounter(state){
      state.showCounter=!state.showCounter
    }
  }
});

const store = configureStore({
  reducer:counterSlice.reducer
});
export const counterActions=counterSlice.actions;

export default store;
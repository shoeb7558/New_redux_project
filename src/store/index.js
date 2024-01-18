import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialcounterState = { counter: 0, showcounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showcounter = !state.showcounter;
    },
  },
});

const initialAuthstate = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthstate,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})


const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authactions = authSlice.actions;
export default store;

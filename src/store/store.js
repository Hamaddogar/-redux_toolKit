// store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userslice';
debugger
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;


// store.js
// import { createStore } from "redux";
// import counterReducer from "./reducers/userslice";

// const store = createStore(counterReducer);

// export default store;

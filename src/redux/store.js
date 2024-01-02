// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import your user slice

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add more reducers here if needed
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    company: companiesReducer,
  },
});

export default store;

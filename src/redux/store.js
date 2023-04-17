import { configureStore } from '@reduxjs/toolkit';

import companiesReducer from './companies/missionsSlice';

const store = configureStore({
  reducer: {
    company: companiesReducer,
  },
});

export default store;

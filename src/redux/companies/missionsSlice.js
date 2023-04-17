import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCompaniesAsync = createAsyncThunk(
  'companies/getCompaniesAsync',
  async () => {
    const response = await fetch(
      'https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=1eadd3fd578d49f47c27da11e7fe4c70'
    );
    if (response.ok) {
      const data = await response.json();
      const companies = data;
      console.log(companies);
      return companies;
    }
    return null;
  }
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCompaniesAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.companies = newStore;
    });
  },
});

export default companiesSlice.reducer;

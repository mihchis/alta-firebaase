import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
  name: 'Service',
  initialState: {
    dataService: [],
    dataServiceAdded: {},
    dataServiceUpdated: {},
    selectedDetail: 'Tất cả',
    active: 'Tất cả',
  },
  reducers: {
    saveDataService: (state, action) => {
      state.dataService = action.payload;
    },
    setSelectedActive: (state, action) => {
      state.active = action.payload;
    },
    setSelectedDetail: (state, action) => {
      state.selectedDetail = action.payload;
    },
    addNewService: (state, action) => {
      state.dataServiceAdded = action.payload;
    },
    updateNewService: (state, action) => {
      state.dataServiceUpdated = action.payload;
    },
    resetAdded: (state) => {
      state.dataServiceAdded = {};
    },
    resetUpdate: (state) => {
      state.dataServiceUpdated = {};
    },
  },
});
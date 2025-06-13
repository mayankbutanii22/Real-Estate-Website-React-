import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from '../Redux/propertySlice';

const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

export default store;
import { configureStore } from '@reduxjs/toolkit'; 
import userReducer from './reducer/userReducer';

export const store = configureStore({
    reducer: {
        stateNumber: (state = 1) => state, 
        userReducer: userReducer
    },
});

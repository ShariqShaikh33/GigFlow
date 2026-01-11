import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./Slices/auth/authSlice";
import bidSlice from "./Slices/bid/bidSlice";
import gigSlice from './Slices/gig/gigSlice';

export const store = configureStore({
    reducer:{
        "User": authSlice,
        "Bid": bidSlice,
        "Gig": gigSlice,
    }
});
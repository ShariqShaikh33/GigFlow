import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./authInitialState";

export const authSlice = createSlice(
    {
        name: "User",
        initialState: authInitialState,
        reducers:{

        }
    }
)

export const {} = authSlice.actions;
export default authSlice.reducer;
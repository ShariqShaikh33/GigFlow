import { createSlice } from "@reduxjs/toolkit";
import { bidInitialState } from "./bidInitialState";

export const bidSlice = createSlice(
    {
        name: "Bid",
        initialState: bidInitialState,
        reducers:{

        }
    }
)

export const {} = bidSlice.actions;
export default bidSlice.reducer;
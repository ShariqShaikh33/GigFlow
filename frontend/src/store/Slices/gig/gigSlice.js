import { createSlice } from "@reduxjs/toolkit";
import { gigInitialState } from "./gigInitialState";

export const gigSlice = createSlice(
    {
        name: "Gig",
        initialState: gigInitialState,
        reducers:{

        }
    }
)

export const {} = gigSlice.actions;
export default gigSlice.reducer;
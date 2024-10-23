import { createSlice } from "@reduxjs/toolkit";

const clanSlice = createSlice({
    name: "clans",
    initialState: [],
    reducers: {
        setClan: (state, action) => {
            return action.payload
        }
    }
})

export const { setClan } = clanSlice.actions;
export default clanSlice.reducer;
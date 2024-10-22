import { createSlice } from "@reduxjs/toolkit";

const clanSlice = createSlice({
    name: "clans",
    initialState: [],
    reducers: {
        addClan: (state, action) => {
            return state.push(action.payload)
        }
    }
})

export const { addClan } = clanSlice.actions;
export default clanSlice.reducer;
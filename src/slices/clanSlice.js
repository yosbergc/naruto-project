import { createSlice } from "@reduxjs/toolkit";

const clanSlice = createSlice({
    name: "clan",
    initialState: [],
    reducers: {
        addClan: (state, action) => {
            return state.push(action.payload)
        }
    }
})

export const { addClan } = clanSlice.actions;
export default clanSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const akatsukiSlice = createSlice({
    name: "akatsukis",
    initialState: [],
    reducers: {
        setAkatsuki: (state, action) => {
            return action.payload
        }
    }
})

export const { setAkatsuki } = akatsukiSlice.actions;
export default akatsukiSlice.reducer
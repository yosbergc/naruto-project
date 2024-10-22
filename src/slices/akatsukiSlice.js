import { createSlice } from "@reduxjs/toolkit";

const akatsukiSlice = createSlice({
    name: "akatsuki",
    initialState: [],
    reducers: {
        addAkatsuki: (state, action) => {
            return state.push(action.payload)
        }
    }
})

export const { addAkatsuki } = akatsukiSlice.actions;
export default akatsukiSlice.reducer
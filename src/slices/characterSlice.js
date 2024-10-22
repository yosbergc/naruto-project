import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name: 'character',
    initialState: [],
    reducers: {
        addCharacter: (state, action) => {
            return state.push(action.payload)
        }
    }
})

export const { addCharacter } = characterSlice.actions;
export default characterSlice.reducer;
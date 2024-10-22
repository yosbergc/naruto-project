import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name: 'characters',
    initialState: [],
    reducers: {
        setCharacter: (_, action) => {
            return action.payload;
        }
    }
})

export const { setCharacter } = characterSlice.actions;
export default characterSlice.reducer;
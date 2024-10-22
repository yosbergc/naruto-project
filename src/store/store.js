import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clanSlice from '../slices/clanSlice'
import akatsukiSlice from '../slices/akatsukiSlice'
import characterSlice from '../slices/characterSlice'

const rootReducer = combineReducers({
    clans: clanSlice,
    akatsukis: akatsukiSlice,
    characters: characterSlice
})
const store = configureStore({
    reducer: rootReducer
})

export { store }
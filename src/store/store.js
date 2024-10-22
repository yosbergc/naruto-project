import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clanSlice from '../slices/clanSlice'
import akatsukiSlice from '../slices/akatsukiSlice'
import characterSlice from '../slices/characterSlice'

const rootReducer = combineReducers({
    clan: clanSlice,
    akatsuki: akatsukiSlice,
    character: characterSlice
})
const store = configureStore({
    reducer: rootReducer
})

export { store }
import {configureStore} from "@reduxjs/toolkit";
import { counterSlice } from "../assets/features/counterSlice";

export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})
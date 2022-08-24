import { configureStore } from "@reduxjs/toolkit";
import {  cartReducer } from "./features/shoe/shoeSlice"
import { formReducer } from "./features/form";
import {utilReducer} from "./features/utils"

 export const store = configureStore({
    reducer: {
        cart:cartReducer,
        form:formReducer,
        utils:utilReducer,
    },
})
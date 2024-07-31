import {configureStore} from "@reduxjs/toolkit"
import chemicalsSlice from "./chemicalSlice"

const store=configureStore({
    reducer:{
        chemicals: chemicalsSlice
    }
})
export default store
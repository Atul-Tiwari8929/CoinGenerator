import {configureStore} from "@reduxjs/toolkit"
import SliceReducer from "./slicer1"


const stores=configureStore({

    reducer :{

        slice1:SliceReducer
    }
 
})

export default stores;
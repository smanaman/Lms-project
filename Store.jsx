import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./src/feactures/Studentslice";
export default configureStore({
    reducer:{
        admin:useReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import register from "./login-slice";
import todoSlice from "./todo-slice";

const store = configureStore({
    reducer: {
        pass: register.reducer,
        todo: todoSlice.reducer
    }
})
export default store;
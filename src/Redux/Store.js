import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./Features/postSlice";

export default configureStore({
    reducer: {
        app: PostSlice,
    }
})
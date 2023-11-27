import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth-Slice";
import MembersReducer from "./Features/Team-Members";

const store = configureStore({
    reducer: {
        auth: authReducer,
        members: MembersReducer,
    },
});

export default store;
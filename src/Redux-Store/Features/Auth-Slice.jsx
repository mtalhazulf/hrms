import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.user = action.payload;
        },
        setUserLogout: (state) => {
            state.user = null;
        },
    },
});

export const { setUserLogin, setUserLogout } = authSlice.actions;
export default authSlice.reducer;
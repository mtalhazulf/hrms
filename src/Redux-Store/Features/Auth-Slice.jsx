import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.user = action.payload.user;
            state.session = action.payload.session;

            console.log(state);
        },
        setUserLogout: (state) => {
            state.user = null;
        },
    },
});

export const { setUserLogin, setUserLogout } = authSlice.actions;
export default authSlice.reducer;
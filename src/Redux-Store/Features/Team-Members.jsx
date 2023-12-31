import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ListOfMembers:[],
};

export const MemberSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        SetMembers: (state, action) => {
            state.ListOfMembers = action.payload;
            console.log(state.ListOfMembers);
        },
    },
});

export const { SetMembers } = MemberSlice.actions;
export default MemberSlice.reducer;
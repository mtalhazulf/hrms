import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ListOfProjects:[],
};

export const ProjectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        SetProject: (state, action) => {
            state.ListOfProjects = action.payload;
            console.log(state.ListOfProjects);
        },
    },
});

export const { SetProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Admins: []
};

export const AppReducer = createSlice({
    name: 'JumbilinAuth',
    initialState,
    reducers: {
        Admins: (state, action) => {
            state.Admins = action.payload;
        },
    },
});

export let { Admins } = AppReducer.actions;
export default AppReducer.reducer;
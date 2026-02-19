// store/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locale: 'pt',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.locale = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
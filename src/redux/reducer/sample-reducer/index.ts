import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { SampleType } from '../../../shared/types/SampleType';

interface SampleState {
    sample: SampleType[]
}

const initialState: SampleState = {
    sample: [],
};

export const sampleSlice = createSlice({
    name: 'sampleReducer',
    initialState,
    reducers: {
        setSampleActions: (state, action: PayloadAction<SampleType[]>) => {
            state.sample = action.payload;
        },
    },

});

export const { setSampleActions } = sampleSlice.actions;

export default sampleSlice.reducer;

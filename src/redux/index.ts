import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer/user-reducer';
import sampleReducer from './reducer/sample-reducer';

export const store = configureStore({
    reducer: {
        sampleReducer,
        userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

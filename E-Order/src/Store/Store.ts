import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './Reducers/AuthSlice';

const Store = configureStore({
    reducer: {
        Auth: AuthReducer,
    },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
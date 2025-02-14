import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './Reducers/AuthSlice';
import SidebarReducer from './Reducers/SidebarSlice';

const Store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Sidebar: SidebarReducer,
    },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
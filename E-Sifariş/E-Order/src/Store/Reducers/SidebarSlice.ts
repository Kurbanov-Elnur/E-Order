import { createSlice } from "@reduxjs/toolkit";

interface SideBarState {
    isActive: boolean;
}

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: {
        isActive: false,
    } as SideBarState,
    reducers: {
        setIsActive: (state) => {
            state.isActive = !state.isActive
        },
    }
});

export const { setIsActive } = sideBarSlice.actions;
export default sideBarSlice.reducer;
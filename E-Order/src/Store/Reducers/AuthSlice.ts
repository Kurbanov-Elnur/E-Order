import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterDTO, LoginDTO } from '../../Data/DTOs/Auth.DTO';

interface AuthData {
    loginData: LoginDTO,
    registerData: RegisterDTO,
    isRegister: boolean,
    isLoading: boolean,
    isLoggedIn: boolean,
}

const initialState: AuthData = {
    loginData: {
        Username: '',
        Password: '',
    },
    registerData: {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '+994 ',
        Description: '',
    },
    isRegister: false,
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') || 'false'),
    isLoading: false,
};

const authSlice = createSlice({
    name: `auth`,
    initialState,
    reducers: {
        setLoginData: (state, action: PayloadAction<LoginDTO>) => {
            state.loginData = action.payload;
        },
        setRegisterData: (state, action: PayloadAction<RegisterDTO>) => {
            state.registerData = action.payload;
        },
        setIsRegister: (state, action: PayloadAction<boolean>) => {
            state.isRegister = action.payload;
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setLoginData, setRegisterData, setIsRegister, setIsLoading } = authSlice.actions;
export default authSlice.reducer;
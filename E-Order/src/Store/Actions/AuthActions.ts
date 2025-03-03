import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiManager from '../../apiManager';
import { LoginDTO } from '../../Data/DTOs/Auth.DTO';


export const LoginUser = createAsyncThunk(
    'auth/login',
    async (LoginDTO: LoginDTO, { rejectWithValue }) => {
        try {
            const response = await ApiManager.apiRequest({
                Url: `Users/login`,
                Method: 'POST',
                Headers: {
                    'Content-Type': 'application/json',
                },
                Params: LoginDTO,
                WithCredentials: true,
            });
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
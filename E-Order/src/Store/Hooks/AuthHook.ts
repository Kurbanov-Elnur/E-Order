import { useDispatch } from 'react-redux';
import { LoginUser } from '../Actions/AuthActions';
import { LoginDTO } from '../../Data/DTOs/Auth.DTO';
import { AppDispatch } from '../Store';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const Login = async (loginData: LoginDTO) => {
        dispatch(LoginUser(loginData))
            .then((result) => {
                if (result.meta.requestStatus === 'fulfilled') {
                    // GetUserAccountInfoAction();
                    navigate('/app/marketplace');
                }
            });
    };

    // const Register = async (registerData: RegisterDTO) => {
    //     await dispatch(RegisterUser(registerData));
    // };

    // const GetUserAccountInfoAction = async () => {
    //     await dispatch(GetUserAccountInfo());
    // };

    return { Login };
};
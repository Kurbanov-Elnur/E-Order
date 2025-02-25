import animationData from '../../Assets/Animations/LoadingAnimation.json';
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher';
import './Auth.scss';
import 'boxicons/css/boxicons.min.css';
import * as authSlice from '../../Store/Reducers/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const authState = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const navigate = useNavigate();  // Хук для редиректа

  const handleButtonClick = () => {
    dispatch(authSlice.setIsLoading(true));

    setTimeout(() => {
      navigate('/app/marketplace'); 
    }, 3000);
  };

  return (
    <div className='auth'>
      <div className='left'>
        <div className='auth-form'>
          <h3 className='title-2'>{t("Auth.Welcome")}</h3>
          <h3 className='title'>E-Sifariş</h3>
          <h4 className='description'>{t("Auth.SignInDesc")}</h4>

          {authState.isRegister && (
            <div className='input-container'>
              <input
                type='text'
                readOnly={authState.isLoading}
                placeholder={`${t("Auth.FirstName")}, ${t("Auth.LastName")}`}
                className='input-field'
              />
              <span className='input-icon'>
                <i className='bx bx-user'></i>
              </span>
            </div>
          )}

          {!authState.isRegister && (
            <div className='input-container'>
              <input
                type='text'
                readOnly={authState.isLoading}
                placeholder={t("Auth.Username")}
                className='input-field'
              />
              <span className='input-icon'>
                <i className='bx bx-user'></i>
              </span>
            </div>
          )}

          {authState.isRegister && (
            <div className='input-container'>
              <input
                type='email'
                readOnly={authState.isLoading}
                placeholder={t("Auth.Email")}
                className='input-field'
              />
              <span className='input-icon'>
                <i className='bx bx-envelope'></i>
              </span>
            </div>
          )}

          {!authState.isRegister && (
            <div className='input-container'>
              <input
                type='password'
                readOnly={authState.isLoading}
                placeholder={t("Auth.Password")}
                className='input-field'
              />
              <span className='input-icon'>
                <i className='bx bx-lock'></i>
              </span>
            </div>
          )}

          {authState.isRegister && (
            <div className='input-container'>
              <input
                type='text'
                readOnly={authState.isLoading}
                className='input-field'
                defaultValue="+994 "
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  let inputValue = target.value.replace(/\D/g, '').replace(/^994/, '');
                  inputValue = inputValue.substring(0, 9);
                  inputValue = inputValue.replace(/(\d{2})(\d{3})?(\d{2})?(\d{2})?/, (_, p1, p2, p3, p4) =>
                    [p1, p2, p3, p4].filter(Boolean).join(' ')
                  );
                  target.value = "+994 " + inputValue;
                }}
                onKeyDown={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.selectionStart !== null && target.selectionStart < 5 && e.key !== "Tab") {
                    e.preventDefault();
                  }
                }}
              />
              <span className='input-icon'>
                <i className='bx bx-phone'></i>
              </span>
            </div>
          )}

          {authState.isRegister && (
            <div className='input-container'>
              <textarea
                readOnly={authState.isLoading}
                placeholder={t("Auth.Description")}
                className='input-field'
                style={{ resize: 'vertical', maxHeight: '120px', minHeight: '20px' }}
              />
              <span className='input-icon'>
                <i className='bx bx-text'></i>
              </span>
            </div>
          )}

          <div className='forgot-password'>
            <a >{t("Auth.ForgotPassword")}</a>
          </div>

          <button
            style={{
              backgroundColor: authState.isLoading ? 'transparent' : '#133E49',
            }}
            disabled={authState.isLoading}
            className='login-button'
            onClick={() => {handleButtonClick()}}
          >
            {authState.isLoading ? (
              <Lottie className="btnAnimation" animationData={animationData} />
            ) : (
              authState.isRegister ? t("Auth.SignUp") : t("Auth.SignIn")
            )}
          </button>

          <div className='register-link'>
            <span>
              {authState.isRegister
                ? `${t("Auth.HasAccountText")}`
                : `${t("Auth.NoAccountText")}`}
            </span> <a onClick={() => dispatch(authSlice.setIsRegister(!authState.isRegister))}>
              {authState.isRegister
                ? `${t("Auth.SignIn")}`
                : `${t("Auth.SignUp")}`}</a>
          </div>
        </div>
      </div>
      <div className='right'>
        <LanguageSwitcher />
      </div>
    </div>
  );
} 
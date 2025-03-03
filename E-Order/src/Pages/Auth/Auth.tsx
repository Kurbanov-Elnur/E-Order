import './Auth.scss';
import animationData from '../../Assets/Animations/LoadingAnimation.json';
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher';
import * as authSlice from '../../Store/Reducers/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import { useAuth } from '../../Store/Hooks/AuthHook';

export default function Auth() {
  const authState = useSelector((state: RootState) => state.Auth);
  const authHooks = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  return (
    <div className='auth'>
      <div className='left'>
        <LanguageSwitcher />
        <div className='auth-form'>
          <h3 className='title-2'>{t("Auth.Welcome")}</h3>
          <h3 className='title'>E-Sifariş</h3>
          <h4 className='description'>{authState.isRegister ? t("Auth.SignUpDesc") : t("Auth.SignInDesc")}</h4>

          {authState.isRegister && (
            <div className='input-container'>
              <input
                type='text'
                readOnly={authState.isLoading}
                placeholder={t("Auth.FirstName")}
                className='input-field'
                value={authState.registerData.FirstName}
                onChange={(e) => {
                  dispatch(authSlice.setRegisterData({
                    ...authState.registerData,
                    FirstName: e.target.value,
                  }));
                }}
              />
              <span className='input-icon'>
                <i className='bx bx-user'></i>
              </span>
            </div>
          )}

          {authState.isRegister && (
            <div className='input-container'>
              <input
                type='text'
                readOnly={authState.isLoading}
                placeholder={t("Auth.LastName")}
                className='input-field'
                value={authState.registerData.LastName}
                onChange={(e) => {
                  dispatch(authSlice.setRegisterData({
                    ...authState.registerData,
                    LastName: e.target.value,
                  }));
                }}
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
                value={authState.loginData.Username}
                onChange={(e) => dispatch(authSlice.setLoginData({ ...authState.loginData, Username: e.target.value }))}
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
                value={authState.registerData.Email}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, Email: e.target.value }))}
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
                value={authState.loginData.Password}
                onChange={(e) => dispatch(authSlice.setLoginData({ ...authState.loginData, Password: e.target.value }))}
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
                value={authState.registerData.PhoneNumber}
                onChange={(e) => {
                  let inputValue = e.target.value.replace(/\D/g, '').replace(/^994/, '');
                  inputValue = inputValue.substring(0, 9);
                  inputValue = inputValue.replace(/(\d{2})(\d{3})?(\d{2})?(\d{2})?/, (_, p1, p2, p3, p4) =>
                    [p1, p2, p3, p4].filter(Boolean).join(' ')
                  );
                  dispatch(authSlice.setRegisterData({
                    ...authState.registerData,
                    PhoneNumber: "+994 " + inputValue
                  }));
                }}
                onKeyDown={(e) => {
                  if (e.currentTarget.selectionStart !== null && e.currentTarget.selectionStart < 5 && e.key !== "Tab") {
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
                value={authState.registerData.Description}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, Description: e.target.value }))}
                placeholder={t("Auth.Description")}
                className='input-field'
                style={{ resize: 'vertical', maxHeight: '120px', minHeight: '20px' }}
              />
              <span className='input-icon'>
                <i className='bx bx-text'></i>
              </span>
            </div>
          )}

          {!authState.isRegister && (
            <div className='forgot-password'>
              <a >{t("Auth.ForgotPassword")}</a>
            </div>
          )}

          <button
            style={{
              backgroundColor: authState.isLoading ? 'transparent' : '#133E49',
            }}
            disabled={authState.isLoading}
            className='login-button'
            onClick={() => authHooks.Login({
              Username: authState.loginData.Username,
              Password: authState.loginData.Password,
            })}
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
            </span> <button onClick={() => dispatch(authSlice.setIsRegister(!authState.isRegister))}>
              {authState.isRegister
                ? `${t("Auth.SignIn")}`
                : `${t("Auth.NoAccountBtn")}`}</button>
          </div>
        </div>
      </div>
      <div className='right'>
      </div>
    </div>
  );
} 
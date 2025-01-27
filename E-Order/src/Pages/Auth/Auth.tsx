import './Auth.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react"

import * as authSlice from '../../Store/Reducers/AuthSlice';
import { RootState } from '../../Store/Store';
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher';

import animationData from '../../Assets/Animations/LoadingAnimation.json';

export default function Auth() {
  const authState = useSelector((state: RootState) => state.Auth);
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  return (
    <div className='auth'>
      <LanguageSwitcher />

      <div className='overlay'></div>
      <div className={`form ${authState.isRegister ? "register-form" : ""}`}>
        <h2>{t("Auth.Welcome")}</h2>
        <h1>{t("Auth.SignIn")}</h1>
        <div className={`inputs-container ${authState.isRegister ? "register-container" : ""}`}>
          {/* Login */}
          {!authState.isRegister &&
            <div className="input-container">
              <span className="custom-position">
                <i className='bx bxs-id-card' ></i>
              </span>
              <input
                type="text"
                id="firstName"
                value={authState.loginData.Username}
                onChange={(e) => dispatch(authSlice.setLoginData({ ...authState.loginData, Username: e.target.value }))}
                className="input"
                required
              />
              <label
                htmlFor="firstName"
                className={`input-label ${authState.loginData.Username ? "focused" : ""}`}
              >
                {t("Auth.Username")}
              </label>
            </div>
          }
          {!authState.isRegister &&
            <div className="input-container">
              <span className="custom-position">
                <i className='bx bxs-lock-alt' ></i>
              </span>
              <input
                type="text"
                id="password"
                value={authState.loginData.Password}
                onChange={(e) => dispatch(authSlice.setLoginData({ ...authState.loginData, Password: e.target.value }))}
                className="input"
                required
              />
              <label
                htmlFor="password"
                className={`input-label ${authState.loginData.Password ? "focused" : ""}`}
              >
                {t("Auth.Password")}
              </label>
            </div>
          }
          {/* Register */}
          {authState.isRegister &&
            <div className="input-container">
              <span className="custom-position">
                <i className='bx bxs-id-card' ></i>
              </span>
              <input
                type="text"
                id="firstName"
                value={authState.registerData.FirstName}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, FirstName: e.target.value }))}
                className="input"
                required
              />
              <label
                htmlFor="firstName"
                className={`input-label ${authState.registerData.FirstName ? "focused" : ""}`}
              >
                {t("Auth.FirstName")}
              </label>
            </div>
          }
          {authState.isRegister &&
            <div className="input-container">
              <span className="custom-position">
                <i className='bx bxs-id-card' ></i>
              </span>
              <input
                type="text"
                id="lastName"
                value={authState.registerData.LastName}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, LastName: e.target.value }))}
                className="input"
                required
              />
              <label
                htmlFor="lastName"
                className={`input-label ${authState.registerData.LastName ? "focused" : ""}`}
              >
                {t("Auth.LastName")}
              </label>
            </div>
          }
          {authState.isRegister &&
            <div className="input-container">
              <span className="custom-position">
                <i className='bx bx-envelope' ></i>
              </span>
              <input
                type="text"
                id="email"
                value={authState.registerData.Email}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, Email: e.target.value }))}
                className="input"
                required
              />
              <label
                htmlFor="email"
                className={`input-label ${authState.registerData.Email ? "focused" : ""}`}
              >
                {t("Auth.Email")}
              </label>
            </div>
          }
          {authState.isRegister &&
            <div className="input-container">
              <span className="custom-position">
                <i className='bx bx-phone' ></i>
              </span>
              <input
                type="text"
                id="phoneNumber"
                value={authState.registerData.PhoneNumber}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, PhoneNumber: e.target.value }))}
                className="input"
                required
              />
              <label
                htmlFor="phoneNumber"
                className={`input-label ${authState.registerData.PhoneNumber ? "focused" : ""}`}
              >
                {t("Auth.PhoneNumber")}
              </label>
            </div>
          }
          {authState.isRegister &&
            <div className="input-container" style={{ gridColumn: 'span 2', width: '100%' }}>
              <span className="custom-position" style={{ right: '3rem', top: '1.7rem' }}>
                <i className='bx bx-edit-alt'></i>
              </span>
              <input
                style={{ height: '50px' }}
                type="text"
                id="description"
                value={authState.registerData.Description}
                onChange={(e) => dispatch(authSlice.setRegisterData({ ...authState.registerData, Description: e.target.value }))}
                className="input"
                required
              />
              <label
                style={{ left: '3.5rem', top: '2rem' }}
                htmlFor="description"
                className={`input-label ${authState.registerData.Description ? "desc-focused" : ""}`}
              >
                {t("Auth.Description")}
              </label>
            </div>
          }
        </div>
        <div className='checkbox-container'>
          <input
            type='checkbox'
            id='rememberMe'
            className='peer'
          />
          <label htmlFor='rememberMe'>
            {t("Auth.RememberMe")}
          </label>
        </div>
        <button
          className="signİnUpBtn"
          disabled={authState.isLoading}
          onClick={() => { dispatch(authSlice.setIsLoading(true)) }}
        >
          {authState.isLoading ? (
            <Lottie className="btnAnimation" animationData={animationData} />
          ) : (
            authState.isRegister ? t("Auth.SignUp") : t("Auth.SignIn")
          )}
        </button>
        <div className="auth-switch">
          <p>
            {authState.isRegister
              ? `${t("Auth.HasAccountText")}`
              : `${t("Auth.NoAccountText")}`}
            <a
              onClick={() => {
                dispatch(authSlice.setIsRegister(!authState.isRegister));
              }}
            >
              {authState.isRegister
                ? `${t("Auth.SignIn")}`
                : `${t("Auth.SignUp")}`}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
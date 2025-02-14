import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher';
import './Auth.scss';
import 'boxicons/css/boxicons.min.css';

export default function Auth() {
  return (
    <div className='auth'>
      <div className='left'>
        <div className='auth-form'>
          <h3 className='title-2'>Xoş gəlmisiniz!</h3>
          <h3 className='title'>E-Sifariş</h3>
          <h4 className='description'>Şəxsi kabinetinizə daxil olun</h4>

          <div className='input-container'>
            <input
              type='email'
              placeholder='Email'
              className='input-field'
            />
            <span className='input-icon'>
              <i className='bx bx-envelope'></i>
            </span>
          </div>

          <div className='input-container'>
            <input
              type='password'
              placeholder='Password'
              className='input-field'
            />
            <span className='input-icon'>
              <i className='bx bx-lock'></i>
            </span>
          </div>

          <div className='forgot-password'>
            <a href='#'>Forgot Password?</a>
          </div>

          <Link to={'/app/search'} className='login-button'>Log in</Link>

          <div className='register-link'>
            <span>Don't have an account?</span> <a href='#'>Sign Up</a>
          </div>
        </div>
      </div>
      <div className='right'>
        <LanguageSwitcher />
      </div>
    </div>
  );
} 
import React, { useState } from 'react';
import mainIcon from '../../asset/images/main.png';
import kakao from '../../asset/images/icon_kakao.png';
import google from '../../asset/images/icon_google.png';
import naver from '../../asset/images/icon_naver.png';
import './style.css';

interface props {
  open: boolean;
  setOpen: any;
}

export default function Login({open, setOpen}: props) {
  const [passwordView, setPasswordView] = useState<string>('password');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changePasswordView = () => {
    if (passwordView === 'password') setPasswordView('text');
    if (passwordView === 'text') setPasswordView('password');
  };
  return (
    <>
      <div className={open ? 'modal-background' : 'modal-hide'}></div>
      <div className={open ? 'modal' : 'modal-hide'}>
        {/* <div className="dimmed"></div> */}
        <div className="sign-in-modal">
          <div className="closeButton">
            
            <div className="header-close-button" onClick={() => handleClose()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className="header--logo">
            <img className="icon-brand-logo" src={mainIcon} alt="메인아이콘" />
          </div>

          <form className="sign-in-modal--form">
            <div className="form__input-block">
              <input
                placeholder="이메일"
                data-kv="email"
                className="form__input form__input--email"
                type="email"
              />
              <div className="form__input form__input--password">
                <input
                  className="e-sign-in-input"
                  value="password"
                  type={passwordView}
                  spellCheck="false"
                  placeholder="비밀번호"
                />
                <span
                  className="toggle-password"
                  onClick={() => changePasswordView()}
                >
                  <i
                    className={
                      passwordView === 'password'
                        ? 'fa-solid fa-eye-slash'
                        : 'fa-solid fa-eye'
                    }
                  ></i>
                </span>
              </div>
            </div>
            <button className="login-button">로그인</button>
          </form>
          <p className="sign-in-modal__more-action">
            <a href="#아이디찾기" className="more-action__text">
              아이디(이메일) 찾기
            </a>
            <span className="more-action-divider"></span>
            <a href="#비밀번호찾기" className="more-action__text">
              비밀번호 찾기
            </a>
            <span className="more-action-divider"></span>
            <a href="#회원가입" className="more-action__text">
              회원가입
            </a>
          </p>
          <div className="sign-in-modal__social-sign-in">
            <hr className="social-sign-in__line" />
            <span className="social-sign-in__title">간편 로그인</span>
            <div className="social__sign-in-buttons">
              <button className="kakao">
                <img
                  className="kakaoicon-sign-up"
                  src={kakao}
                  alt="카카오 간편 로그인"
                />
              </button>
              <button className="google">
                <img
                  className="googleicon-sign-up"
                  src={google}
                  alt="구글 간편 로그인"
                />
              </button>
              <button className="naver">
                <img
                  className="navericon-sign-up"
                  src={naver}
                  alt="네이버 간편 로그인"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

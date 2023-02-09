// import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { signInApi } from '../../../apis';

import mainIcon from '../../../asset/images/main.png';
import { useUserStore } from '../../../stores';
// import kakao from '../../asset/images/icon_kakao.png';
// import google from '../../asset/images/icon_google.png';
// import naver from '../../asset/images/icon_naver.png';
import './style.css';

interface props {
  open: boolean;
  setOpen: any;
}

export default function Login({ open, setOpen }: props) {
  const [userEmail, setEmail] = useState<string>('');
  const [userPassword, setPassword] = useState<string>('');
  const [cookies, setCookies] = useCookies();

  const { setUser } = useUserStore();

  const [passwordView, setPasswordView] = useState<string>('password');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changePasswordView = () => {
    if (passwordView === 'password') setPasswordView('text');
    if (passwordView === 'text') setPasswordView('password');
  };

  const signInHandler = async () => {
    if (userEmail.length === 0 || userPassword.length === 0) {
      alert('이메일과 비밀번호를 입력하세요. ');
      return;
    }
    const data = {
      userId: userEmail,
      password: userPassword,
    };

    const signInResponse = await signInApi(data);

    console.log(data)
    
    if (!signInResponse) {
      // console.log(signInResponse)
      alert('로그인에 실패했습니다.');
      return;
    }
    if (!signInResponse.status) {
      console.log(signInResponse)
      alert('로그인에 실패했습니다.');
      return;
    }
    alert('로그인 성공');
    const { token, exprTime, user } = signInResponse.data;
    const expires = new Date();
    expires.setMilliseconds(expires.setMilliseconds + exprTime);

    setCookies('token', token, { expires });
    setUser(user);
  };
  // if(!email.includes('@')) {
  //   alert('이메일 형식이 아닙니다');
  //   return;
  // }
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
          {/* <hr className="social-sign-in__line" /> */}
          <div className="header--logo">
            <img className="icon-brand-logo" src={mainIcon} alt="메인아이콘" />
          </div>

          <div className="sign-in-modal--form">
            <div className="form__input-block">
              <input
                placeholder="이메일"
                data-kv="email"
                className="form__input form__input--email"
                // type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form__input form__input--password">
                <input
                  className="e-sign-in-input"
                  // value="password"
                  type={passwordView}
                  spellCheck="false"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
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
            <button className="login-button" onClick={() => signInHandler()}>
              로그인
            </button>
            <hr className="social-sign-in__line" />
          </div>
          <p className="sign-in-modal__more-action">
            <a href="/findID" className="more-action__text">
              아이디(이메일) 찾기
            </a>
            <span className="more-action-divider"></span>
            <a href="/findPassword" className="more-action__text">
              비밀번호 찾기
            </a>
            <span className="more-action-divider"></span>
            <a href="/signUp" className="more-action__text">
              회원가입
            </a>
          </p>
          <div className="sign-in-modal__social-sign-in">
            {/* <span className="social-sign-in__title">간편 로그인</span>
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
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
}

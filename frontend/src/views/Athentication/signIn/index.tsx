// import axios from 'axios';
import { useState, KeyboardEvent } from 'react';
import { useCookies } from 'react-cookie';
import { signInApi } from '../../../apis';

import mainIcon from '../../../asset/images/main.png';
import { useUserStore } from '../../../stores';
import './style.css';

interface props {
  open: boolean;
  setOpen: any;
}

export default function Login({ open, setOpen }: props) {
  const [userEmail, setEmail] = useState<string>('');
  const [userPassword, setPassword] = useState<string>('');
  const [cookies, setCookies] = useCookies();

  //로그인시 엔터키를 누르면 singInHandler가 작동하는 엔터키 이벤트
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log();
      signInHandler();
    }
  };

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

    if (!signInResponse) {
      alert('로그인에 실패했습니다.');
      return;
    }
    if (!signInResponse.status) {
      console.log(signInResponse);
      alert('로그인에 실패했습니다.');
      return;
    }
    alert(data.userId + '환영합니다.');
    const { token, exprTime, user } = signInResponse.data;
    const expires = new Date();
    expires.setMilliseconds(expires.setMilliseconds + exprTime);

    setCookies('token', token, { expires });
    setUser(user);
    setOpen(false);
  };

  return (
    <>
      <div className={open ? 'modal-background' : 'modal-hide'}></div>
      <div className={open ? 'modal' : 'modal-hide'}>
        <div className="sign-in-modal">
          <div className="closeButton">
            <div className="header-close-button" onClick={() => handleClose()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="header--logo">
            <img className="icon-brand-logo" src={mainIcon} alt="메인아이콘" />
          </div>

          <div className="sign-in-modal--form">
            <div className="form__input-block">
              <input
                placeholder="이메일"
                data-kv="email"
                className="form__input form__input--email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form__input form__input--password">
                <input
                  className="e-sign-in-input"
                  type={passwordView}
                  spellCheck="false"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
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
          </div>
        </div>
      </div>
    </>
  );
}

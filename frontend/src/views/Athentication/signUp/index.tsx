import React, { useState } from 'react';
// import mainIcon from '../../asset/images/main.png';
import './style.css';
// import axios from 'axios';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { signUpApi } from '../../../apis';
import axios from 'axios';

export default function Signup() {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');

  const [userEmailCheck, setUserEmailCheck] = useState<boolean>(true);
  const [userPasswordCheck, setUserPasswordCheck] = useState<boolean>(true);
  const [userPasswordConfirmCheck, setUserPasswordConfirmCheck] =
    useState<boolean>(true);
  useState<boolean>(true);

  const emailExt = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const passwordExt = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,32}$/;

  // const [requestResult, setRequestResult] = useState<string>('');

  const onEmailHandler = (value: string) => {
    setUserEmail(value);
    if (value.length === 0) {
      setUserEmailCheck(true);
      return;
    }
    setUserEmailCheck(emailExt.test(value));
  };

  const onPasswordHandler = (value: string) => {
    setUserPassword(value);
    if (value.length === 0) {
      setUserPasswordCheck(true);
      return;
    }
    setUserPasswordCheck(passwordExt.test(value));
  };

  const onUserPasswordConfirmHandler = (value: string) => {
    setUserPasswordConfirm(value);
    if (value.length === 0) {
      setUserPasswordConfirmCheck(true);
      return;
    }
    setUserPasswordConfirmCheck(userPassword === value);
  };

  const signupHandler = async () => {
    const data = {
      userId: userEmail,
      password: userPassword,
      passwordConfirm: userPasswordConfirm,
      name: userName,
      telNum: userPhone,
    };

    const signUpResponse = await signUpApi(data);

    if (!signUpResponse) {
      alert('회원가입에 실패했습니다.');
      return;
    }
    if (!signUpResponse.status) {
      console.log(signUpResponse);
      alert('회원가입에 실패했습니다.');
      return;
    }
    alert('회원가입이 되었습니다!');
  };

  const [passwordView, setPasswordView] = useState<string>('password');
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changePasswordView = () => {
    if (passwordView === 'password') setPasswordView('text');
    if (passwordView === 'text') setPasswordView('password');
  };

  return (
    <>
      <main id="main">
        <section className="signup">
          <div className="sign-up-container">
            <div className="join_membership" role="banner">
              <a href="/" className="logo">
                {/* <img className="brand-logo" src={mainIcon} alt="메인아이콘" /> */}
              </a>
            </div>
            <h2 className="signup--title">회원가입</h2>
            {/* <aside className="signup--messages">
          <h3 className="visually-hidden">회원가입 메세지</h3>
          <div
            className="signup--messages-slider"
            style={"transition: transform 1s ease-in-out 0s; transform: translate(-100%);"} >
            <p className="signup__message">해삐에서 다양한 성장의 기회를 얻으세요!</p>
            <p className="signup__message">나의 성장을 돕는 IT 실무 지식 플랫폼</p>
          </div>
        </aside> */}
            <div className="signup--main">
              <form className="signup--form">
                <div className="form--input-block">
                  <label htmlFor="email" className="form--label">
                    이메일
                  </label>
                  <div>
                    <input
                      id="email"
                      data-kv="email"
                      type="email"
                      className="e-sign-up-input--e-email"
                      placeholder="example@habby.com"
                      onChange={(e) => onEmailHandler(e.target.value)}
                    />
                    {!userEmailCheck && (
                      <span className="form--error--email--hide">
                        이메일 형식이 올바르지 않습니다.
                      </span>
                    )}
                  </div>
                </div>
                <div className="form--input-block">
                  <label htmlFor="password" className="form--label">
                    비밀번호
                  </label>
                  <div className="form--input e-password">
                    <input
                      className="e-sign-up-input--password"
                      // value="password"
                      type={passwordView}
                      spellCheck="false"
                      id="password"
                      placeholder="비밀번호"
                      value={userPassword}
                      onChange={(e) => onPasswordHandler(e.target.value)}
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
                  {!userPasswordCheck && (
                    <div className="form-password-guide-area--hide">
                      <span className="form-password-guide-hidden-line--error">
                        영문/숫자/특수문자/ 2가지 이상 포함
                      </span>
                      <br />
                      <span className="form-password-guide-hidden-line--error">
                        8자 이상 32자 이하 입력 (공백 제외)
                      </span>
                      <br />
                    </div>
                  )}
                </div>
                <div className="form--input-block">
                  <label htmlFor="passwordConfirm" className="form--label">
                    비밀번호 확인
                  </label>
                  <div className="form--input e-password-confirm">
                    <input
                      className="e-sign-up-input--e-password-confirm"
                      // value="password"
                      type={passwordView}
                      spellCheck="false"
                      id="passwordConfirm"
                      placeholder="비밀번호 확인"
                      onChange={(e) => onUserPasswordConfirmHandler(e.target.value)}
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
                  <span className="form--error--hide"></span>
                  {!userPasswordConfirmCheck && (
                    <span className="form--error--passwordConfirm">
                      비밀번호가 일치하지 않습니다.
                    </span>
                  )}
                </div>
                <div className="form--input-block">
                  <label htmlFor="name1" className="form--label">
                    이름
                  </label>
                  <div>
                    <input
                      type="text"
                      name="username"
                      id="name"
                      className="form--input name1"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form--input-block">
                  <label htmlFor="phone" className="form--label">
                    전화번호
                  </label>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form--input phone1"
                      placeholder="-없이 숫자만 입력하세요"
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  </div>
                </div>
                {/* <Box>
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  /> */}
                {/* <h3>{requestResult}</h3> */}
                <button
                  onClick={() => signupHandler()}
                  className="e-signup-button"
                >
                  회원 가입
                </button>
                {/* </Box> */}

                {/* <div className="form-footer">
              <span className="footer--policy">
                " 가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다. "
              </span>
            </div> */}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

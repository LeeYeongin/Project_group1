import React, { useState } from 'react'
import kakao from '../../asset/images/icon_kakao.png';
import google from '../../asset/images/icon_google.png';
import './style.css'

export default function Signup() {
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
      <div className="signup">
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
              <input
                id="email"
                data-kv="email"
                type="email"
                className="form--input e-sign-up-input e-email"
                placeholder="example@inflab.com"
              />
              <span className="form--error--hide"></span>
              <span className="form--error--passwordConfirm">
                이메일 형식이 올바르지 않습니다.
              </span>
            </div>
            <div className="form--input-block"></div>
            <label htmlFor="password" className="form--label">
              비밀번호
            </label>
            <div className="form--input e-password">
              <input
                className="e-sign-up-input--password"
                value="password"
                type={passwordView}
                spellCheck="false"
                id="password"
                placeholder="******"
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
            <p className="form-password-guide-hidden">
              <span className="form-password-guide-hidden-line">
                영문/숫자/특수문자/ 2가지 이상 포함
              </span>
              <span className="form-password-guide-hidden-line">
                8자 이상 32자 이하 입렵 (공백 제외)
              </span>
              <span className="form-password-guide-hidden-line">
                연속 3자 이상 동일한 문자/숫자 제외
              </span>
              <span className="form-password-guide-hidden-line">
                비밀번호에 사용할 수 없는 문자가 포함되어 있습니다.
              </span>
            </p>
            <div className="form--input-block">
              <label htmlFor="passwordConfirm" className="form--label">
                비밀번호 확인
              </label>
              <div className="form--input e-password-confirm">
                <input
                  className="e-sign-up-input"
                  value="passwordConfirm"
                  type={passwordView}
                  spellCheck="false"
                  id="passwordConfirm"
                  placeholder="******"
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
              <span className="form--error--passwordConfirm">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
            <button className="e-signup-button">가입하기</button>
            {/* <div className="form-footer">
              <span className="footer--policy">
                " 가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다. "
              </span>
            </div> */}
          </form>
          <div className="signup--social">
            <hr className="social--line" />
            <span className="social--title">간편 회원가입</span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

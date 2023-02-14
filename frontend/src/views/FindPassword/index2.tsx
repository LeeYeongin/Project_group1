import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './style2.css'

export default function ChangePassword() {
  const navigator = useNavigate();
  const location = useLocation();
  const userId = location.state.value;
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordView, setPasswordView] = useState<string>('password');

  const changePasswordView = () => {
    if (passwordView === 'password') setPasswordView('text');
    if (passwordView === 'text') setPasswordView('password');
  };
  
  const changePasswordHandler = async () => {
    console.log(userId)
    const data = {
      idUser: userId,
      password: password,
      password2: confirmPassword
    }

    await axios.patch("http://localhost:4040/api/find/changePassword", data)
    .then((Response) => {
      if(Response.data.data.result){
        alert("비밀번호가 성공적으로 변경되었습니다.")
        navigator('/')
      } else{
        alert("다시 입력하세요!")
      }
    })
    
  }
  

  return (
    <>
      <div className="change-password-wrapper2">
        <div className="change-password-container2">
          <div className="head2">
            <div className="head-container2">
              <h1 className="change-password-title2">비밀번호 변경</h1>
              <h4 className="change-phrase2">
                변경할 비밀번호를 정확히 입력해 주세요.
              </h4>
            </div>
          </div>
          <div className="change-password-form2">
            <div className="change-password-input-container2">
              <h4 className="input-label2">새로운 비밀번호</h4>
              <div className="input-wrapper2">
                <input
                  className="password-input-container2"
                  type={passwordView}
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
            <div className="check-new-password-input-container2">
              <h4 className="input-label2">비밀번호 확인</h4>
              <div className="input-wrapper2">
                <input
                  className="password-input-container2"
                  type={passwordView}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <div className="btn-container2">
              <button
                className="change-password-btn2"
                onClick={changePasswordHandler}
              >
                비밀번호 변경
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

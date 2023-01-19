import React from 'react'
import './style2.css'

export default function ChangePassword() {
  return (
    <>
      <div className="change-password-wrapper">
        <div className="change-password-container">
          <div className="head">
            <div className="head-container">
              <h1 className="change-password-title">비밀번호 변경</h1>
              <h4 className="change-phrase">변경할 비밀번호를 정확히 입력해 주세요.</h4>
            </div>
          </div>
          <div className="change-password-form">
            <div className="change-password-input-container">
              <h4 className="input-label">새로운 비밀번호</h4>
              <input className="input-container" type="text" />
            </div>
            <div className="check-new-password-input-container">
              <h4 className="input-label">비밀번호 확인</h4>
              <input className="input-container" type="text" />
            </div>
            <div className="btn-container">
              <button className="change-password-btn">비밀번호 변경</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

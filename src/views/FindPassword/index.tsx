import React from 'react'
import './style.css'

export default function FindPassword() {
  return (
    <>
      <div className="find-password-wrapper">
        <div className="find-password-container">
          <div className="head">
            <div className="head-container">
              <h1 className="find-password-title">비밀번호 찾기</h1>
              <h4 className="happy-phrase">해삐에서 가치를 높이세요!</h4>
            </div>
          </div>
          <div className="find-password-form">
            <div className="input-id-container">
              <h4 className="input-label">아이디</h4>
              <input className="input-container" type="text" />
            </div>
            <div className="input-telNum-container">
              <h4 className="input-label">전화번호</h4>
              <input className="input-container" type="text" />
            </div>
            <div className="btn-container">
              <button className="find-password-btn">비밀번호 찾기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

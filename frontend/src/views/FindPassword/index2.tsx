import React from 'react'
import './style2.css'

export default function ChangePassword() {
  return (
    <>
      <div className="change-password-wrapper2">
        <div className="change-password-container2">
          <div className="head2">
            <div className="head-container2">
              <h1 className="change-password-title2">비밀번호 변경</h1>
              <h4 className="change-phrase2">변경할 비밀번호를 정확히 입력해 주세요.</h4>
            </div>
          </div>
          <div className="change-password-form2">
            <div className="change-password-input-container2">
              <h4 className="input-label2">새로운 비밀번호</h4>
              <input className="input-container2" type="text" />
            </div>
            <div className="check-new-password-input-container2">
              <h4 className="input-label2">비밀번호 확인</h4>
              <input className="input-container2" type="text" />
            </div>
            <div className="btn-container2">
              <button className="change-password-btn2">비밀번호 변경</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import './style.css'

export default function FindPassword() {
  return (
    <>
      <div className="find-password-wrapper2">
        <div className="find-password-container2">
          <div className="head2">
            <div className="head-container2">
              <h1 className="find-password-title2">비밀번호 찾기</h1>
              <h4 className="happy-phrase2">해삐에서 가치를 높이세요!</h4>
            </div>
          </div>
          <div className="find-password-form2">
            <div className="input-id-container2">
              <h4 className="input-label2">이메일</h4>
              <input className="input-container2" type="text" />
            </div>
            <div className="input-telNum-container2">
              <h4 className="input-label2">전화번호</h4>
              <input className="input-container2" type="text" />
            </div>
            <div className="btn-container2">
              <button className="find-password-btn2">비밀번호 찾기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

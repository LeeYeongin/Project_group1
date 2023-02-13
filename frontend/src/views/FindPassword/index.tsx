import { areArraysEqual } from '@mui/base';
import axios from 'axios';
import React, { useState } from 'react'
import './style.css'

//비밀번호 변경 이동
const gotoChangePassword = () => {
  window.location.href = `http://localhost:3000/changePassword`;
};

export default function FindPassword() {
  const [userId, setUserId] = useState<string>('');
  const [telnum, setTelnum] = useState<string>('');
  const [result, setResult] = useState<boolean>(false);

  const findPasswordHandler = () => {

    const getdata = {
      userId: userId,
      telnum: telnum
    }

    axios.post("http://localhost:4040/findPassword/", getdata)
    .then((Response) => {
      
      setResult(Response.data.data.result);
      
    })
    if(result){
      gotoChangePassword();
    } else{
      alert("다시 입력하세요!")
    }
  }

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
              <input className="input-container2" type="text"  onChange={(e) => setUserId(e.target.value)}/>
            </div>
            <div className="input-telNum-container2">
              <h4 className="input-label2">전화번호</h4>
              <input className="input-container2" type="text" onChange={(e) => setTelnum(e.target.value)}/>
            </div>
            <div className="btn-container2">
              <button className="find-password-btn2" onClick={findPasswordHandler}>비밀번호 찾기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

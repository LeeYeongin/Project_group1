import React from 'react'
import './style2.css';

export default function IndexModule() {
  return (
    <>
      <div className="main_container">
        <div className='container'>
          <div className='head'>
            <div>아이디 찾기 결과</div>
          </div>
          <div className='main'>
            <div className='name'>@@@님의 아이디는 아래와 같습니다.</div>
            <div className='result'>abcdef@naver.com</div>
            <div className='footer'>
              <div className='password'>
                <div className='password2'>비밀번호 찾기</div>
              </div>
              <div className='password'>
                <div className='password2'>로그인 화면</div>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import './style2.css';

export default function IndexModal() {
  return (
    <>
      <div className="main_container333">
        <div className="container333">
          <div className="head333">
            <div>아이디 찾기 결과</div>
          </div>
          <div className="main333">
            <div><i className="fa-regular fa-circle-check"></i></div>
            <div className="name333">@@@님의 아이디는 아래와 같습니다.</div>
            <div className="result333">abcdef@naver.com</div>
            <div className="footer333">
              <a href="/findPassword">
                <div className="password333">
                  <div className="password2333">비밀번호 찾기</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

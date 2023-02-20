import React from 'react';
import { useLocation } from 'react-router-dom';
import './style2.css';

export default function IndexModal() {
  const location = useLocation();
  const userId = location.state.userId;
  const name = location.state.name;

  console.log(userId);
  return (
    <>
      <div className="main_container333">
        <div className="container333">
          <div className="head333">
            <div>아이디 찾기 결과</div>
          </div>
          <div className="main333">
            <div>
              <i className="fa-regular fa-circle-check"></i>
            </div>
            <div className="name333">{name}님의 아이디는 아래와 같습니다.</div>
            <div className="result333">{userId}</div>
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

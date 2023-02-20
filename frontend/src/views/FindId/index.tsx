import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function FindId() {
  const [name, setName] = useState<string>('');
  const [telnum, setTelnum] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const navigator = useNavigate();

  const findIdHandler = async () => {
    const getdata = {
      name: name,
      telnum: telnum,
    };

    await axios
      .post('http://localhost:4040/api/find/id', getdata)
      .then((Response) => {
        if (Response.data.status) {
          setUserId(Response.data.data.userId);
          const id = Response.data.data.userId;
          navigator('/indexModal', { state: { userId: id, name: name } });
        } else {
          alert('다시 입력하세요!');
        }
      });
  };
  return (
    <div>
      <div className="main-container33">
        <div className="container33">
          <div className="head33">
            <div className="find-id33">아이디 찾기</div>
            <div className="find-id233">해삐에서 가치를 높이세요!</div>
          </div>
          <div className="main33">
            <div className="main233">
              <div className="name33">이름</div>
              <div className="input-bar33">
                <input
                  className="input33"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="main333">
              <div className="telnum33">휴대폰번호</div>
              <div className="input-bar33">
                <input
                  className="input33"
                  type="text"
                  onChange={(e) => setTelnum(e.target.value)}
                />
              </div>
            </div>
            <div className="main433">
              <div className="success33">
                <div className="findID-btn" onClick={findIdHandler}>
                  아이디 찾기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

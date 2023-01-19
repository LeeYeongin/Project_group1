import React, { useState } from "react";
import './board.css';

function BoardWrite() {

  const Write = () => {
    window.location.href = "/main5";

    // 이동과 동시에 DB에 리뷰 저장
    // + 돌아갔을때 해당 페이지의 리뷰모음에 첫번째 자리에 들어있어야 한다.
  }

  return(
      <div className="boardBody5">
          <div className="boardHead5">
              <div className="board_ID"><span>아이디</span></div>
              <div className="board_DATE"><span>날짜</span></div>
          </div>
          <div className="boardTitle5">
              <input type="text" placeholder="제목을 입력해주세요"/>
          </div>
          <div className="boardText5">
            <textarea className="reviewArea" placeholder="리뷰를 작성해 주세요"/>
          </div>
          <div className="boardFooter">
            <button type="button" className="writeBtn5" onClick={Write}>작성</button>
            <button type="button" className="writeBtn5">수정하기</button>
          </div>
      </div>
  );
}

export default BoardWrite;
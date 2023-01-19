import React from "react";
import './board.css';

function BoardWrite() {
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
              <button type="submit" className="writeBtn5">작성</button>
              <button type="reset" className="writeBtn5">수정하기</button>
            </div>
        </div>
    );
}

export default BoardWrite;
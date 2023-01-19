import React from "react";

function BoardWrite() {
    return(
        <div className="boardBody5">
            <div className="boardHead5">
                <div>아이디</div>
                <div>날짜</div>
            </div>
            <div className="boardTitle5">
                <input type="text" placeholder="제목을 입력해주세요"/>
            </div>
            <textarea className="boardText5" placeholder="리뷰를 작성해 주세요">
            
            </textarea>
            <button type="button" className="writeBtn5">작성</button>
        </div>
    );
}

export default BoardWrite;
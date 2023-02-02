import React, { ReactElement, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './board.css';

const BoardWrite = (idClass: Number) => {
  const [value, setValue] = React.useState<number | null>(5);
  const [detailItems, setDetailItems] = React.useState<any>(null);
  console.log(idClass);

  const WriteBtn = () => {
    window.location.href = `http://localhost:4040/main5/${idClass}/`;
    // 이동과 동시에 DB에 리뷰 저장
    // + 돌아갔을때 해당 페이지의 리뷰모음에 첫번째 자리에 들어있어야 한다.
  }
  return(
      <div className="boardBody5">
          <div className="boardHead5">
              <div className="board_ID">아이디</div>
              <div className="input_ID">로그인한 아이디</div>
          </div>
          <div className="boardText5">
            <textarea className="reviewArea" placeholder="수정하는 내용"/>
            {/* 별점기능 */}
            <Box sx={{'& > legend': { mt: 2 }}} className="starRating">
              <Rating className="WriteRating" value={value} size='large' onChange={(event, newValue) => {setValue(newValue);}}/>
            </Box> 
          </div>
          <div className="boardFooter">
            <button type="button" className="writeBtn5" onClick={WriteBtn}>작성</button>
          </div>
      </div>
  );
}

export default BoardWrite;
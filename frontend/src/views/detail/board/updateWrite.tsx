import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './board.css';
import { useParams } from "react-router-dom";

function BoardUpdate() {
  const [grade, setGrade] = useState<number | null>(5);
  const [idUser, setIdUser] = useState<string>('aaa');
  const [contents, setContents] = useState<string>('');

  // idClass 받아오는 값
  // const idClass2 = useParams<string>();
  // const idClass = idClass2.idClass;

  // 리뷰내용 저장
  const handleTextArea = (e: any) => {
    setContents(e.target.value)
  }
  
  const UpdateBtn = () => {
    const petchReview = {contents, grade};
    axios.patch('http://localhost:4040/updateReview', petchReview).catch((error) => console.log(error.message));

    // window.location.href = `http://localhost:3000/main5/${idClass}`;
  }

  return(
      <div className="boardBody5">
        <div className="boardHead5">
            <div className="board_ID">아이디</div>
            <div className="input_ID">{idUser}</div>
        </div>
        <div className="boardText5">
        <textarea className="reviewArea" placeholder="수정하는 내용" onChange={handleTextArea}/>
          {/* 별점기능 */}
          <Box sx={{'& > legend': { mt: 2 }}} className="starRating">
            <Rating className="WriteRating" value={grade} size='large' onChange={(event, newGrade) => {setGrade(newGrade);}}/>
          </Box> 
        </div>
        <div className="boardFooter">
          <button type="button" className="writeBtn5" onClick={UpdateBtn}>작성</button>
        </div>
      </div>
  );
}

export default BoardUpdate;
import React, { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './board.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BoardWrite = () => {
  const [grade, setGrade] = useState<number | null>(5);
  const [idUser] = useState<string>(useLocation().state);
  const [contents, setContents] = useState<string>('');

  // idClass 받아오는 값
  const idClass2 = useParams<string>();
  const idClass = idClass2.idClass;

  const navigator = useNavigate();

  // 리뷰내용 저장
  const handleTextArea = (e: any) => {
    setContents(e.target.value)
  }
  
  const WriteBtn = () => {
    const postReview = {idUser, contents, idClass, grade};
    axios.post('http://localhost:4040/writeReview', postReview).catch((error) => console.log(error.message));
    navigator(`/main5/${idClass2.idClass}`);
  }

  return(
      <div className="boardBody5">
          <div className="boardHead5">
              <div className="board_ID">아이디</div>
              <div className="input_ID">{idUser}</div>
          </div>
          <div className="boardText5">
            <textarea className="reviewArea" placeholder="리뷰작성" onChange={handleTextArea}/>
            {/* 별점기능 */}
            <Box sx={{'& > legend': { mt: 2 }}} className="starRating">
              <Rating className="WriteRating" value={grade} size='large' onChange={(event, newgrade) => {setGrade(newgrade);}}/>
            </Box> 
          </div>
          <div className="boardFooter">
            <button type="button" className="writeBtn5" onClick={WriteBtn}>작성</button>
          </div>
      </div>
  );
}

export default BoardWrite;
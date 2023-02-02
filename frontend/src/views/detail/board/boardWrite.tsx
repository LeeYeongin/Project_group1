import React, { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './board.css';

const BoardWrite = () => {
  const [value, setValue] = useState<number | null>(5);
  const [idUser, setIdUser] = useState<string>('aaa');
  const [text, setText] = useState<string>('');

  // 클래스id저장[받아와야함]
  const idClass:number = (1);

  // 별점 저장
  const changeGrade = (event: HTMLInputElement, newValue: number | null) => {
    setValue(newValue);
  }

  // 리뷰내용 저장
  const handleTextArea = (e: any) => {
    setText(e.target.value)
  }

  // const postReview = [ idUser, text, idClass, value ];
  const [postReview, setPostReview] = useState<any[]>([]);

  console.log(postReview);
  
  const WriteBtn = () => {
    axios.post('http://localhost:4040/reviewWrite', postReview);

    window.location.href = `http://localhost:3000/main5/${idClass}`;
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
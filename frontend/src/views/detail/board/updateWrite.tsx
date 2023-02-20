import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './board.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function BoardUpdate() {
  const [grade, setGrade] = useState<number | null>(5);
  const [idUser, setIdUser] = useState<string>();
  const [contents, setContents] = useState<string>('');

  const idClass = useParams<string>();
  const idReview = useParams<string>();

  const navigator = useNavigate();

  const [cookies] = useCookies();
  const getClassDetailHandler = async (token: string) => {
    const requestOption = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get('http://localhost:4040/myProfile', requestOption)
      .then((response) => {
        setIdUser(response.data.data.userId);
        console.log(idUser);
      });
  };

  useEffect(() => {
    getClassDetailHandler(cookies.token);
  });

  // 리뷰내용 저장
  const handleTextArea = (e: any) => {
    setContents(e.target.value);
  };

  const UpdateBtn = () => {
    const patchReview = { contents, grade };
    axios
      .patch(
        `http://localhost:4040/review/updateReview/${idReview.idReview}`,
        patchReview
      )
      .then((respo) => {
        console.log(respo.data);
      })
      .catch((error) => console.log(error.message));

    navigator(`/main5/${idClass.idClass}`);
  };

  return (
    <div className="boardBody5">
      <div className="boardHead5">
        <div className="board_ID">아이디</div>
        <div className="input_ID">{idUser}</div>
      </div>
      <div className="boardText5">
        <textarea
          className="reviewArea"
          placeholder="수정하는 내용"
          onChange={handleTextArea}
        />
      </div>
      {/* 별점기능 */}
      <Box sx={{ '& > legend': { mt: 2 } }} className="starRating">
        <Rating
          className="WriteRating"
          value={grade}
          size="large"
          onChange={(event, newGrade) => {
            setGrade(newGrade);
          }}
        />
      </Box>
      <div className="boardFooter">
        <button type="button" className="writeBtn5" onClick={UpdateBtn}>
          작성
        </button>
      </div>
    </div>
  );
}

export default BoardUpdate;

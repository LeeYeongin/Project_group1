import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './board.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const BoardWrite = () => {
  const [grade, setGrade] = useState<number | null>(5);
  const [idUser, setIdUser] = useState<string>();
  const [contents, setContents] = useState<string>('');

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
        console.log(response.data.data);
        setIdUser(response.data.data.userId);
        console.log(idUser);
      });
  };

  useEffect(() => {
    getClassDetailHandler(cookies.token);
  });

  // idClass 받아오는 값
  const idClass2 = useParams<string>();
  const idClass = idClass2.idClass;

  const navigator = useNavigate();

  // 리뷰내용 저장
  const handleTextArea = (e: any) => {
    setContents(e.target.value);
  };

  const WriteBtn = () => {
    const postReview = { idUser, contents, idClass, grade };
    axios
      .post('http://localhost:4040/review/writeReview', postReview)
      .catch((error) => console.log(error.message));
    navigator(`/main5/${idClass2.idClass}`);
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
          placeholder="리뷰작성"
          onChange={handleTextArea}
        />
      </div>
      {/* 별점기능 */}
      <Box sx={{ '& > legend': { mt: 2 } }} className="starRating">
        <Rating
          className="WriteRating"
          value={grade}
          size="large"
          onChange={(event, newgrade) => {
            setGrade(newgrade);
          }}
        />
      </Box>
      <div className="boardFooter">
        <button type="button" className="writeBtn5" onClick={WriteBtn}>
          작성
        </button>
      </div>
    </div>
  );
};

export default BoardWrite;

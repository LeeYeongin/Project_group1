import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ReviewList.css';

interface ItemProps{
  reviewItems: any[];
  idClass: string | undefined;
}

// 데이터는 id로 찾고 order by로 구분해서 해당 내용만 가져오게 설정
const ReviewList = ({reviewItems, idClass}: ItemProps) => {
  // 시작페이지
  const [page, setPage] = useState<number>(1);
  // 페이지가 위치한 섹션
  const [section, setSection] = useState<number>(1);
  // 섹션의 최대 갯수
  const [pageList, setPageList] = useState<number[]> ([]);

  const navigator = useNavigate();
  console.log(reviewItems);
  
  // 임의의 표시제한
  const LIMIT = 4;
  // 버튼당 보여줄 페이지
  const offset = (page - 1) * LIMIT;

  // 페이지 이동
  const WriteReview = () => {
    navigator(`/writeReview/${idClass}`);
  }

  const UpdateReview = () => {
    navigator(`/updateReview/${idClass}`);
  }

  useEffect (() => {
    const list = [];
    for (let i = (section - 1) * 5; i < section * 5; i++) {
      if (i < ((reviewItems.length - 1) / 4))
        list.push(i);
    }

    setPageList(list)
  }, [section]);

  const ReviewItem = reviewItems.slice(offset, offset + LIMIT).map((CONTENT) => {
    return(
      <div className='review5_main' key={CONTENT.idReview}>
        <h3 className="reviewTitle5">{CONTENT.idUser}님</h3>
        <div className="ratingStar">
          <Rating name="read-only" value={CONTENT.grade} readOnly />
        </div>
        <div className="reviewBody">
          <p>{CONTENT.contents}</p>
        </div>
        <div className='reviewSubmit'>
            <button type="button" onClick={UpdateReview}>수정하기</button>
            <button type="button">삭제하기</button>
        </div>
      </div>
    )
  });

  return(
    <div className='review5_list'>
      {/* 보여지는 페이지 */}
      {ReviewItem}
       <div className='review5_change'>
          <div className="reviewCollect5">
            {/* 페이지 관리 */}
            <button className="leftBtn" onClick={() => setSection(section - 1)} disabled={section === 1}>&lt;</button>
            {pageList.map((index) => (
              <button key={index + 1} onClick={() => setPage(index + 1)} className={index + 1 === page ? "selectItem" : "selectItem disabled"}>
                {index + 1}
              </button>
            ))}
            <button className="rightBtn" onClick={() => setSection(section + 1)} disabled={section * 5 >= (reviewItems.length - 1) / 4}>&gt;</button>
          </div>
         <button type="button" className="writeReview5" onClick={WriteReview}>작성하기</button>
       </div>
    </div>
  )
}

export default ReviewList;
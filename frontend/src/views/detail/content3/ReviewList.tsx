import { Rating } from "@mui/material";
import React, { useState } from "react";
import './ReviewList.css';

const reviewitem = [
  { id: 1, name: '1', con: '1' }, { id: 2, name: '2', con: '2' }, { id: 3, name: '3', con: '3' }, { id: 4, name: '4', con: '4' },
  { id: 5, name: '5', con: '5' }, { id: 6, name: '6', con: '6' }, { id: 7, name: '7', con: '7' }, { id: 8, name: '8', con: '8' },
  { id: 9, name: '9', con: '9' },
]
// const ReviewBtn = reviewitem.map((REVIEW) => {
//   const [isSelectBtn, setSelectBtn] = useState<string | null>(null);

//   const handleClick = (e:any) => {
//     const {name} = e.target;
//     setSelectBtn(name);
//   }

//   return(
//     <div className="reviewCollect5">
//       <button>&lt;</button>
//       <button key={REVIEW.id} name={REVIEW.name} id="cItem" onClick={handleClick} className={REVIEW.name === isSelectBtn ? "selectItem" : "selectItem disabled"}>
//         {REVIEW.con}
//       </button>
//       <button>&gt;</button>
//     </div>
//   )
// })

const ReviewList = () => {
  // 넘어온 데이터로 맞추도록 설정
  const [value, setValue] = React.useState<number | null>(2);

  // 페이지 이동
  const WriteReview = () => { window.location.href = "/writeReview"; }
  const UpdateReview = () => { window.location.href = "/updateReview"; }

  return(
      <div className='review5_list'>
          <div className='review5_main'>
            <h3 className="reviewTitle5">작성자명1</h3>
            <div className="ratingStar">
              <Rating name="read-only" value={value} readOnly />
            </div>
            <div className="reviewBody">
              <p>리뷰적는란리뷰적는란리뷰적는란<br/>리뷰적는란리뷰적는란리뷰적는란</p>
            </div>
            <div className='reviewSubmit'>
                <button type="button" onClick={UpdateReview}>수정하기</button>
                <button type="button">삭제하기</button>
            </div>
          </div>
          <div className='review5_change'>
              {/* 리뷰 갯수가4개를 넘어가면 버튼이 늘어나며 새롭게 만들어진 리뷰가 생김과 동시에가장 오래된 리뷰가 밀려난다. */}
              {/* {ReviewBtn} */}
              <div className="reviewCollect5">
                <button>&lt;</button>
                <button id="cItem" className="selectItem">1</button>
                <button id="cItem" className="selectItem">2</button>
                <button id="cItem" className="selectItem">3</button>
                <button id="cItem" className="selectItem">4</button>
                <button id="cItem" className="selectItem">5</button>
                <button>&gt;</button>
              </div>
              <button type="button" className="writeReview5" onClick={WriteReview}>작성하기</button>
          </div>
      </div>
  );
}

export default ReviewList;
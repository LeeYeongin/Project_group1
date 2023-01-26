import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import './ReviewList.css';

const contentItem = [
  { id: 1, title: '제목1번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 2, title: '제목2번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 3, title: '제목3번', starValue: 5, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 4, title: '제목4번', starValue: 2, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 5, title: '제목5번', starValue: 4, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 6, title: '제목6번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 7, title: '제목7번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 8, title: '제목8번', starValue: 2, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 9, title: '제목9번', starValue: 5, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 10, title: '제목10번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 11, title: '제목11번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 12, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 13, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 14, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 15, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 16, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 17, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 18, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 19, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 20, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 21, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 22, title: '제목12번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 23, title: '제목3번', starValue: 5, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 24, title: '제목4번', starValue: 2, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 25, title: '제목5번', starValue: 4, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 26, title: '제목6번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 27, title: '제목7번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 28, title: '제목8번', starValue: 2, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 29, title: '제목9번', starValue: 5, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 30, title: '제목1번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 31, title: '제목2번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 32, title: '제목3번', starValue: 5, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 33, title: '제목4번', starValue: 2, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 34, title: '제목5번', starValue: 4, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 35, title: '제목6번', starValue: 1, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 36, title: '제목7번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 37, title: '제목8번', starValue: 2, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 38, title: '제목9번', starValue: 5, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
  { id: 39, title: '제목10번', starValue: 3, contents: '리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.' + <br/> + ' 리뷰내용들어가는 란입니다.'},
]
// 데이터는 id로 찾고 order by로 구분해서 해당 내용만 가져오게 설정
const ReviewList = () => {
  // 시작페이지
  const [page, setPage] = useState<number>(1);
  // 페이지가 위치한 섹션
  const [section, setSection] = useState<number>(1);
  // 섹션의 최대 갯수
  const [pageList, setPageList] = useState<number[]> ([]);
  
  // 임의의 표시제한
  const LIMIT = 4;
  // 버튼당 보여줄 페이지
  const offset = (page - 1) * LIMIT;

  // 페이지 이동
  const WriteReview = () => { window.location.href = "/writeReview"; }
  const UpdateReview = () => { window.location.href = "/updateReview"; }

  useEffect (() => {
    const list = [];
    for (let i = (section - 1) * 5; i < section * 5; i++) {
      if (i < ((contentItem.length - 1) / 4))
        list.push(i);
    }

    setPageList(list)
  }, [section]);

  const ReviewItem = contentItem.slice(offset, offset + LIMIT).map((CONTENT) => {
    return(
      <div className='review5_main' key={CONTENT.id}>
        <h3 className="reviewTitle5">{CONTENT.title}</h3>
        <div className="ratingStar">
          <Rating name="read-only" value={CONTENT.starValue} readOnly />
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
            <button className="rightBtn" onClick={() => setSection(section + 1)} disabled={section * 5 >= (contentItem.length - 1) / 4}>&gt;</button>
          </div>
         <button type="button" className="writeReview5" onClick={WriteReview}>작성하기</button>
       </div>
    </div>
  )
}

export default ReviewList;
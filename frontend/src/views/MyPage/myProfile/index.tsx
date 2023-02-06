import axios, { Axios, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import MyCourse from '../myCourse';
import ShowMyProfile from './index2';
import './style.css';


 //수강바구니 이동
const gotocart = () => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/cart`;
}

// 내 학습 이동
const gotomystudy = () => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/myCourse`;
}

//구매내역 이동0
const gotoOrderlist = () => {

    window.location.href = `http://localhost:3000/orderlist`;
}


export default function MyProfile() {
    
    const [choose, setChoose] = useState<string>('프로필');

    const ShowProfileHandler = (choose: any) => {
      if(choose === '프로필')
        return <ShowMyProfile/>
      else if(choose === '내 학습')
        return <MyCourse/>
    } 

    
  return (
    <>
      <div className="head-bar1">
        <div className="profile1">{choose}</div>
      </div>
      <div className="container1">
        <div className="main-container1">
          <>
          <div className="side-menu1">
            <div className="menu1">
              <div className="title1">HOME</div>
              <div className="title21" onClick={() => setChoose('프로필')}>프로필</div>
            </div>
            <div className="menu">
              <div className="title1">학습관리</div>
              <div className="title21" onClick={() => setChoose('내 학습')}>
                내 학습
              </div>
              <div className="title21 title31">작성한 게시글</div>
            </div>
            <div className="menu1">
              <div className="title1">수강신청 관리</div>
              <div className="title21" onClick={gotocart}>
                수강 바구니
              </div>
              <div className="title21 title31" onClick={gotoOrderlist}>
                구매내역
              </div>
            </div>
            <div className="menu1">
              <div className="title1">설정</div>
              <div className="title21 title31">계정 정보</div>
            </div>
          </div>
          {ShowProfileHandler(choose)}
          </>
        </div>
      </div>
    </>
  );
}

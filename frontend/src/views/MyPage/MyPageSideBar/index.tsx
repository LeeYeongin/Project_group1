import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

// 프로필로 이동
const gotoProfile = () => {
  window.location.href = `http://localhost:3000/myProfile`;
};
//수강바구니 이동
const gotocart = () => {
  window.location.href = `http://localhost:3000/cart`;
};
// 내학습으로 이동
const gotoMyCourse = () => {
  window.location.href = `http://localhost:3000/myCourse`;
};
// 구매내역 이동
const gotoOrderlist = () => {
  window.location.href = `http://localhost:3000/orderlist`;
};
// 정보수정 이동
const gotoModifiy = () => {
  window.location.href = `http://localhost:3000/modifiyProfile`;
};

export default function SideBar() {

const [idUser, setIdUser] = useState<string>('');
const [cookies, setCookies] = useCookies();
const requestOption = {
  headers: {
    Authorization: `Bearer ${cookies.token}`
  }
}

axios.get(`http://localhost:4040/myProfile/writed/`, requestOption)
      .then((Response) => {
        setIdUser(Response.data.data[0].idUser);
        console.log(Response.data.data[0].idUser);
      })
      .catch((error) => {
        console.log(error);
      });

// 작성한 게시글 이동
const gotoMyPosting = () => {
  window.location.href = `http://localhost:3000/myProfile/writed`;
};

  return (
    <div className="side-menu1">
      <div className="menu1">
        <div className="title1">HOME</div>
        <div className="title21" onClick={gotoProfile}>
          프로필
        </div>
      </div>
      <div className="menu">
        <div className="title1">학습관리</div>
        <div className="title21" onClick={gotoMyCourse}>
          내 학습
        </div>
        <div className="title21 title31" onClick={gotoMyPosting}>
          작성한 게시글
        </div>
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
        <div className="title21 title31" onClick={gotoModifiy}>
          계정 정보
        </div>
      </div>
    </div>
  );
}

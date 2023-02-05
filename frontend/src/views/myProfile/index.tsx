import axios from 'axios';
import React from 'react'
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
  return (
    <>
    <div className="head-bar1">
        <div className="profile1">프로필</div>
    </div>
    <div className="container1">
        <div className="main-container1">
            <div className="side-menu1">
                <div className="menu1">
                    <div className="title1">HOME</div>
                    <div className="title21">프로필</div>
                </div>
                <div className="menu">
                    <div className="title1">학습관리</div>
                    <div className="title21" onClick={gotomystudy}>내 학습</div>
                    <div className="title21 title31">작성한 게시글</div>
                </div>
                <div className="menu1">
                    <div className="title1">수강신청 관리</div>
                    <div className="title21" onClick={gotocart}>수강 바구니</div>
                    <div className="title21 title31" onClick={gotoOrderlist}>구매내역</div>
                </div>
                <div className="menu1">
                    <div className="title1">설정</div>
                    <div className="title21 title31">계정 정보</div>
                </div>
            </div>
            <div className="main-menu1">
                <div className="head1">
                    <div className="head11">@@@님</div>
                    <div className="head21">해삐와</div>
                    <div className="head31">@@@</div>
                    <div className="head41">일째 성장 중!</div>
                </div>
                <div className="ex1">프로필</div>
                <div className="list1">
                    <div className="list01">
                        <div className="list11">프로필 이미지</div>
                        <div className="list21">
                            <div className="image1"></div>
                        </div>
                    </div>
                    <div className="list01">
                        <div className="list11">닉네임</div>
                        <div className="list31">bumong</div>
                    </div>
                    <div className="list01">
                        <div className="list11">이메일</div>
                        <div className="list31">huner3063@gmail.com</div>
                    </div>
                    <div className="list01">
                        <div className="list11">자기소개</div>
                        <div className="introduce1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

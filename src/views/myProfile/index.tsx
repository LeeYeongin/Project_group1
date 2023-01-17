import React from 'react'
import './style.css';

export default function MyProfile() {
  return (
    <>
    <div className="head-bar">
        <div className="profile">프로필</div>
    </div>
    <div className="container">
        <div className="main-container">
            <div className="side-menu">
                <div className="menu">
                    <div className="title">HOME</div>
                    <div className="title2">프로필</div>
                </div>
                <div className="menu">
                    <div className="title">학습관리</div>
                    <div className="title2">내 학습</div>
                    <div className="title2 title3">작성한 게시글</div>
                </div>
                <div className="menu">
                    <div className="title">수강신청 관리</div>
                    <div className="title2">수강 바구니</div>
                    <div className="title2 title3">구매내역</div>
                </div>
                <div className="menu">
                    <div className="title">설정</div>
                    <div className="title2 title3">계정 정보</div>
                </div>
            </div>
            <div className="main-menu">
                <div className="head">
                    <div className="head1">@@@님</div>
                    <div className="head2">해삐와</div>
                    <div className="head3">@@@</div>
                    <div className="head4">일째 성장 중!</div>
                </div>
                <div className="ex">프로필</div>
                <div className="list">
                    <div className="list0">
                        <div className="list1">프로필 이미지</div>
                        <div className="list2">
                            <div className="image"></div>
                        </div>
                    </div>
                    <div className="list0">
                        <div className="list1">닉네임</div>
                        <div className="list3">bumong</div>
                    </div>
                    <div className="list0">
                        <div className="list1">이메일</div>
                        <div className="list3">huner3063@gmail.com</div>
                    </div>
                    <div className="list0">
                        <div className="list1">자기소개</div>
                        <div className="introduce"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

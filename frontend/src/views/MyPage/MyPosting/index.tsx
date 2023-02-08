import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
const gotoProfile = () => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/myProfile`;
  }
  
   //수강바구니 이동
  const gotocart = () => {
      // axios.post(`http://localhost:4040/main5/${idClass}`);
      window.location.href = `http://localhost:3000/cart`;
  }
  // 내학습으로 이동
  const gotoMyCourse = () => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/myCourse`;
  }
  //구매내역 이동0
  const gotoOrderlist = () => {
  
      window.location.href = `http://localhost:3000/orderlist`;
  }
  //정보수정 이동0
  const gotoModifiy = () => {
  
    window.location.href = `http://localhost:3000/modifiyProfile`;
  }
  
  const gotoMyPosting = () => {
    window.location.href = `http://localhost:3000/myProfile/writed/aaa`;
  }

  const gotopage = (idClass:number) => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/main5/${idClass}`;
}

export default function MyPosting() {
  const idUser = 'aaa'
  const [postList, setPostList] = useState<any[]>([])

  const myPostingHandler = () => {
    axios.get(`http://localhost:4040/myProfile/writed/${idUser}`)
    .then((Response) => {
      // const tmp = []
      // tmp.push(
        
      // )
      setPostList(Response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    myPostingHandler()
  },[])

  return (
    <>
      <div className="head-bar1">
        <div className="profile1">게시글</div>
      </div>
      <div className="container1">
        <div className="main-container1">
          <>
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
            <div className="myPosting-main-contianer">
            <div className='posting-sub-title'>내가 작성한 게시글</div>
             {/* <div className="ex1">보유한 강의</div> */}
             {postList.map((item) => (
                <div className='posting-list-wrapper' onClick={() => gotopage(item.idClass)}>
                  <div className='posting-title'><a href="#">{item.className}</a></div>
                  <div className='posting-contents'>{item.contents}</div>
                </div>
             ))}
              
            </div>
          </>
        </div>
      </div>
    </>
  );
}

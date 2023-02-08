import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Totoro from '../../../asset/img/totoro.png';
import './style.css';

// 프로필로 이동
const gotoProfile = () => {
  // axios.post(`http://localhost:4040/main5/${idClass}`);
  window.location.href = `http://localhost:3000/myProfile`;
}

// 내학습으로 이동
const gotoMyCourse = () => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/myCourse`;
}

 //수강바구니 이동
 const gotocart = () => {
   // axios.post(`http://localhost:4040/main5/${idClass}`);
   window.location.href = `http://localhost:3000/cart`;
 };

//구매내역 이동0
const gotoOrderlist = () => {

  window.location.href = `http://localhost:3000/orderlist`;
}

//정보수정 이동0
const gotoModifiy = () => {

  window.location.href = `http://localhost:3000/modifiyProfile`;
}



export default function MyCourse() {
  const [myCourseList, setMyCourseList] = useState<any[]>([]);

  const getMyCourseList = () => {
    const getdata = 'aaa';

    // const userInfo = await axios
    //     .post("http://localhost:4040/myProfile", getdata);
    
    // setUserProfile((userInfo as AxiosResponse<any, any>).data.data)

    axios.get("http://localhost:4040/myCourse/" + getdata)
    .then((Response) => {
        const tmp = [];
        console.log(Response.data.data.length);
        for(let i = 0; i < Response.data.data.length; i++){
          for(let j = 0; j < Response.data.data[i].className.length; j++){
            tmp.push({
            img: Response.data.data[i].className[j].img,
            className: Response.data.data[i].className[j].className
          })
          console.log(tmp);
          }
        }
        console.log(tmp);
        setMyCourseList(tmp);
        console.log(myCourseList);
    })
    .catch((error) => {
    })
  }

  useEffect(() =>{
    getMyCourseList();
  });
  return (
    <>
      <div className="head-bar1">
        <div className="profile1">내 학습</div>
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
                <div className="title21 title31" onClick={gotoModifiy}>계정 정보</div>
              </div>
            </div>
            <div className="my-course-container">
              <div className="ex1">보유한 강의</div>
              <div className="list">
                {myCourseList.map((list:any) => (
                  <div className="my-course-wrapper">
                    <div className="my-course-item">
                      <div className="my-course-item-img">
                        <img src={list.img} alt="" />
                      </div>
                      <div className="my-course-item-title">
                        {list.className}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

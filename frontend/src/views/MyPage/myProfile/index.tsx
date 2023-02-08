import axios, { Axios, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import MyCourse from '../myCourse';
import './style.css';

// 프로필로 이동
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

export default function MyProfile() {
  const [userProfile, setUserProfile] = useState<any[]>();
    const getUserInfoHandler = () => {
        const getdata = {
            idUser: "aaa"
        };

        // const userInfo = await axios
        //     .post("http://localhost:4040/myProfile", getdata);
        
        // setUserProfile((userInfo as AxiosResponse<any, any>).data.data)

        axios.post("http://localhost:4040/myProfile", getdata)
        .then((Response) => {
            const tmp = [];
            tmp.push({
            profile: Response.data.data.profile,
            nickname:Response.data.data.nickname,
            email: Response.data.data.email,
            description: Response.data.data.description
          })
          setUserProfile(tmp)
          console.log(userProfile?.at(0).email)
          console.log(userProfile?.at(0).description)
          console.log(userProfile?.at(0).nickname)
        })
        .catch((error) => {
      
        })
        

    }

    useEffect(() => {
       getUserInfoHandler();
    }, []);
  return (
    <>
      <div className="head-bar1">
        <div className="profile1">프로필</div>
      </div>
      <div className="container1">
        <div className="main-container1">
          <>
            <div className="side-menu1">
              <div className="menu1">
                <div className="title1">HOME</div>
                <div className="title21"onClick={gotoProfile}>프로필</div>
              </div>
              <div className="menu">
                <div className="title1">학습관리</div>
                <div className="title21" onClick={gotoMyCourse}>내 학습</div>
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
            <div className="main-menu1">
              <div className="list1">
                <div className="list01">
                  <div className="list11">프로필 이미지</div>
                  <div className="list21">
                    <div className="image1">
                      <img
                        src={userProfile?.at(0).profile}
                        alt=""
                        className="img1"
                      />
                    </div>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">닉네임</div>
                  <div className="list31">{userProfile?.at(0).nickname}</div>
                </div>
                <div className="list01">
                  <div className="list11">이메일</div>
                  <div className="list31">{userProfile?.at(0).email}</div>
                </div>
                <div className="list01">
                  <div className="list11">자기소개</div>
                  <div className="introduce1">
                    {userProfile?.at(0).description}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

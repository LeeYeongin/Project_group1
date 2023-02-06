import axios from 'axios';
import React, { useEffect, useState } from 'react'
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

// 내학습으로 이동
const gotoMyCourse = () => {
  // axios.post(`http://localhost:4040/main5/${idClass}`);
  window.location.href = `http://localhost:3000/myCourse`;
}

export default function ModifiyProfile() {
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
            img: Response.data.data.img,
            name: Response.data.data.name,
            nickName:Response.data.data.nickName,
            email: Response.data.data.email,
            password: Response.data.data.password,
            telNum: Response.data.data.telNum,
            description: Response.data.data.description
          })
          setUserProfile(tmp)
          console.log(userProfile?.at(0).email)
          console.log(userProfile?.at(0).description)
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
        <div className="profile1">프로필 수정</div>
      </div>
      <div className="container1">
        <div className="main-container1">
          <>
            <div className="side-menu1">
              <div className="menu1">
                <div className="title1">HOME</div>
                <div className="title21">프로필</div>
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
                <div className="title21 title31" onClick={gotoOrderlist}>계정 정보</div>
              </div>
            </div>
            <div className="main-menu1">
              <div className="list1">
                <div className="list01">
                  <div className="list11">프로필 이미지</div>
                  <div className="list21">
                    <div className="image1">
                      <img
                        src={userProfile?.at(0).img}
                        alt=""
                        className="img1"
                      />
                    </div>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">이름</div>
                  <div className="list31">{userProfile?.at(0).name}</div>
                </div>
                <div className="list01">
                  <div className="list11">닉네임</div>
                  <div className="list31">{userProfile?.at(0).nickName}</div>
                </div>
                <div className="list01">
                  <div className="list11">이메일</div>
                  <div className="list31">{userProfile?.at(0).email}</div>
                </div>
                <div className="list01">
                  <div className="list11">비밀번호</div>
                  <div className="list31">{userProfile?.at(0).password}</div>
                </div>
                <div className="list01">
                  <div className="list11">전화번호</div>
                  <div className="list31">{userProfile?.at(0).telNum}</div>
                </div>
                <div className="list01">
                  <div className="list11">자기소개</div>
                  <div className="introduce1">
                    {userProfile?.at(0).description}
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">회원탈퇴</div>
                  <div className="list31"></div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

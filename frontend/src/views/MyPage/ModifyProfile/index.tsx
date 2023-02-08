import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css';

 //수강바구니 이동
 const gotocart = () => {
  // axios.post(`http://localhost:4040/main5/${idClass}`);
  window.location.href = `http://localhost:3000/cart`;
}

// 프로필로 이동
const gotoProfile = () => {
  // axios.post(`http://localhost:4040/main5/${idClass}`);
  window.location.href = `http://localhost:3000/myProfile`;
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

//정보수정 이동0
const gotoModifiy = () => {

  window.location.href = `http://localhost:3000/modifiyProfile`;
}
//게시글 이동
const gotoMyPosting = () => {
  window.location.href = `http://localhost:3000/myProfile/writed/aaa`;
}



export default function ModifiyProfile() {
  const [userProfile, setUserProfile] = useState<any[]>();
  const [profile, setProfile] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [telNum, setTelNum] = useState<string>('');
  const [description, setDescription] = useState<string>('');

    const getUserInfoHandler = () => {
        const getdata = {
            idUser: "aaa"
        };

        // const userInfo = await axios
        //     .post("http://localhost:4040/myProfile", getdata);
        
        // setUserProfile((userInfo as AxiosResponse<any, any>).data.data)

        axios.post("http://localhost:4040/modifiyProfile", getdata)
        .then((Response) => {
            const tmp = [];
            tmp.push({
            profile: Response.data.data.profile,
            name: Response.data.data.name,
            nickname:Response.data.data.nickname,
            email: Response.data.data.email,
            password: Response.data.data.password,
            telNum: Response.data.data.telNum,
            description: Response.data.data.description
          })
          setProfile(Response.data.data.profile)
          setNickname(Response.data.data.nickname)
          setEmail(Response.data.data.email)
          setProfile(Response.data.data.profile)
          setPassword(Response.data.data.password)
          setTelNum(Response.data.data.telNum)
          setDescription(Response.data.data.description)
          
          setUserProfile(tmp)
         
        })
        .catch((error) => {
        })
    }

    useEffect(() => {
       getUserInfoHandler();
    }, []);

    const deleteUser = (arg: any) => {
      const getdata = 'aaa'

      axios.get("http://localhost:4040/modifiyProfile/" + getdata)
      .then((Response) => {
        
        alert('회원탈퇴 성공!!!')
      })
      .catch((error) => {
        
      })

    }

    const modifiyHandler = () => {
      const getdata = {
        profile: profile,
        name: userProfile?.at(0).name,
        nickname: nickname,
        email: email,
        password: password,
        telNum: telNum,
        description: description,
      };

      axios.patch("http://localhost:4040/modifiyProfile", getdata)
      .then((Response) => {
        const tmp = [];
  
        for(let i = 0; i < Response.data.data.length; i++){
          tmp.push({
            profile: Response.data.data.profile,
            name: Response.data.data.name,
            nickname:Response.data.data.nickname,
            email: Response.data.data.email,
            password: Response.data.data.password,
            telNum: Response.data.data.telNum,
            description: Response.data.data.description
          })
        }
        setUserProfile(tmp);
  
      })
      .catch((error) =>{

      })
      gotoModifiy()

      alert('회원수정 성공')
    }

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
                <div className="title21" onClick={gotoProfile}>프로필</div>
              </div>
              <div className="menu">
                <div className="title1">학습관리</div>
                <div className="title21" onClick={gotoMyCourse}>내 학습</div>
                <div className="title21 title31" onClick={gotoMyPosting}>작성한 게시글</div>
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
                  <div className="list11">이름</div>
                  <div className="list31">
                    <input className='userInput' type="text" value={userProfile?.at(0).name} readOnly/>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">닉네임</div>
                  <div className="list31">
                    <input className='userInput' type="text" defaultValue={userProfile?.at(0).nickname} onChange={(e) => setNickname(e.target.value)}/>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">이메일</div>
                  <div className="list31">
                    <input className='userInput' type="text" defaultValue={userProfile?.at(0).email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">비밀번호</div>
                  <div className="list31">
                    <input className='userInput' type="text" defaultValue={userProfile?.at(0).password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">전화번호</div>
                  <div className="list31">
                    <input className='userInput' type="text" defaultValue={userProfile?.at(0).telNum} onChange={(e) => setTelNum(e.target.value)}/>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">자기소개</div>
                  <div className="introduce1">
                    <input className='userInput' type="text" defaultValue={userProfile?.at(0).description} onChange={(e) => setDescription(e.target.value)}/>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">계정</div>
                  <div className='box'>
                    <div className="delete" onClick={deleteUser}>회원탈퇴</div>
                    <input type='button' value='수정하기' className='modifiy' onClick={modifiyHandler}/>
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

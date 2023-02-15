import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../stores';
import SideBar from '../MyPageSideBar';
import './style.css';

//정보수정 이동
const gotoModifiy = () => {
  window.location.href = `http://localhost:3000/modifiyProfile`;
};

export default function ModifiyProfile() {
  const [userProfile, setUserProfile] = useState<any[]>();
  const [profile, setProfile] = useState<any>();
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [telNum, setTelNum] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(false)
  const [cookies, setCookies] = useCookies();
  const [apiUrl] = useState<string>('http://localhost:4040/api/file/image/');
  const navigator = useNavigate();
  const { user, removeUser } = useUserStore();

  const requestOption = {
    headers: {
      Authorization: `Bearer ${cookies.token}`
    }
  }

  const gotoModifiy = () => {
    window.location.href = `http://localhost:3000/modifiyProfile`;
  }
  
  const getUserInfoHandler = async () => {
    // const getdata = {
    //   idUser: 'aaa',
    // };
    await axios
      // .post('http://localhost:4040/modifiyProfile', getdata)
      .get('http://localhost:4040/modifiyProfile',requestOption)
      .then((Response) => {
        const tmp = [];
        tmp.push({
          profile: Response.data.data.profile,
          name: Response.data.data.name,
          nickname: Response.data.data.nickname,
          email: Response.data.data.email,
          password: Response.data.data.password,
          telNum: Response.data.data.telNum,
          description: Response.data.data.description,
        });
        setProfile(Response.data.data.profile);
        setNickname(Response.data.data.nickname);
        setEmail(Response.data.data.email);
        setProfile(Response.data.data.profile);
        setPassword(Response.data.data.password);
        setTelNum(Response.data.data.telNum);
        setDescription(Response.data.data.description);

        setUserProfile(tmp);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getUserInfoHandler();
  }, []);

  const deleteUser = (arg: any) => {
    // const getdata = 'aaa';

    axios
      .get('http://localhost:4040/modifiyProfile/delete',requestOption)
      .then((Response) => {
        alert('회원탈퇴 성공!!!');
        setCookies('token', '', {expires: new Date()});
        removeUser();
        window.location.href = `http://localhost:3000/`;
      })
      .catch((error) => {});
  };

  const handleChangeFile = (event:any) => {
    setFlag(true);
    setProfile(event[0]);
  }

  const uploadHandler = async() => {
    const data = new FormData();
    data.append("file", profile);

    const response = await axios.post('http://localhost:4040/api/file/upload', data).catch((error) => {
      console.log(error.data)
    })

    return (response as AxiosResponse<any, any>).data;
  }

  const modifiyHandler = async () => {
    let profile2 = '';
    if(flag) {
      profile2 = await uploadHandler();
    }
      

    console.log(profile)

    const getdata = {
      profile: profile2,
      name: userProfile?.at(0).name,
      nickname: nickname,
      email: email,
      password: password,
      telNum: telNum,
      description: description,
    };

   axios
      .patch('http://localhost:4040/modifiyProfile', getdata, requestOption)
      .then((Response) => {
        const tmp = [];

        for (let i = 0; i < Response.data.data.length; i++) {
          tmp.push({
            profile: Response.data.data.profile,
            name: Response.data.data.name,
            nickname: Response.data.data.nickname,
            email: Response.data.data.email,
            password: Response.data.data.password,
            telNum: Response.data.data.telNum,
            description: Response.data.data.description,
          });
        }
        setUserProfile(tmp);
      })
      .catch((error) => {});

    alert('회원수정 성공');
    gotoModifiy()
  };

  const goToChangePassword = () => {
    navigator('/changePassword',  { state: { value: email } });
  }


  return (
    <>
      <div className="head-bar1">
        <div className="profile1">프로필 수정</div>
      </div>
      <div className="container1">
        <div className="main-container1">
          <>
            <SideBar />
            <div className="main-menu1">
              <div className="list1">
                <div className="list01">
                  <div className="list11">프로필 이미지</div>
                  <div className="list21">
                    <div className="image1">
                      <img
                        src={apiUrl + userProfile?.at(0).profile}
                        alt=""
                        className="img1"
                      />
                      <form action="">
                        <input type="file" onChange={(e) => handleChangeFile(e.target.files)} />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">이름</div>
                  <div className="list31">
                    <input
                      className="userInput"
                      type="text"
                      value={userProfile?.at(0).name}
                      readOnly
                    />
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">닉네임</div>
                  <div className="list31">
                    <input
                      className="userInput"
                      type="text"
                      defaultValue={userProfile?.at(0).nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">이메일</div>
                  <div className="list31">
                    <input
                      className="userInput"
                      type="text"
                      defaultValue={userProfile?.at(0).email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">비밀번호</div>
                  <div className="changePassword" onClick={goToChangePassword}>
                    비밀번호 변경
                    {/* <input
                      className="userInput"
                      type="text"
                      defaultValue={userProfile?.at(0).password}
                      onChange={(e) => setPassword(e.target.value)}
                    /> */}
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">전화번호</div>
                  <div className="list31">
                    <input
                      className="userInput"
                      type="text"
                      defaultValue={userProfile?.at(0).telNum}
                      onChange={(e) => setTelNum(e.target.value)}
                    />
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">자기소개</div>
                  <div className="introduce1">
                    <input
                      className="userInput"
                      type="text"
                      defaultValue={userProfile?.at(0).description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="list01">
                  <div className="list11">계정</div>
                  <div className="box">
                    <div className="delete" onClick={deleteUser}>
                      회원탈퇴
                    </div>
                    <input
                      type="button"
                      value="수정하기"
                      className="modifiy"
                      onClick={modifiyHandler}
                    />
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

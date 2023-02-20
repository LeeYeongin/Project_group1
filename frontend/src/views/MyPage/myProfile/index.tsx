import axios, { Axios, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useUserStore } from '../../../stores';
import MyCourse from '../myCourse';
import SideBar from '../MyPageSideBar';
import './style.css';

export default function MyProfile() {
  const [userProfile, setUserProfile] = useState<any[]>();
  const [cookies, setCookies] = useCookies();
  const { user } = useUserStore();
  const [profile, setProfile] = useState<any>();
  const [apiUrl] = useState<string>('http://localhost:4040/api/file/image/');

  useEffect(() => {
    console.log(cookies);
    console.log(user);
  }, [cookies]);

  const getUserInfoHandler = async (token: string) => {
    const requestOption = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get('http://localhost:4040/myProfile', requestOption)
      .then((Response) => {
        console.log(Response.data);
        const tmp = [];
        tmp.push({
          profile: Response.data.data.profile,
          nickname: Response.data.data.nickname,
          email: Response.data.data.email,
          description: Response.data.data.description,
        });
        setUserProfile(tmp);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getUserInfoHandler(cookies.token);
  }, []);

  return (
    <>
      <div className="head-bar1">
        <div className="profile1">프로필</div>
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

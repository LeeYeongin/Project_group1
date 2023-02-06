import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'

export default function ShowMyProfile() {
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
            nickName:Response.data.data.nickName,
            email: Response.data.data.email,
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
    <div className="main-menu1">
      <div className="list1">
        <div className="list01">
          <div className="list11">프로필 이미지</div>
          <div className="list21">
            <div className="image1">
                <img src={userProfile?.at(0).img} alt="" className='img1'/>
            </div>
          </div>
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
          <div className="list11">자기소개</div>          
            <div className="introduce1">
                {userProfile?.at(0).description}
            </div>
          </div>
        </div>
    </div>
  );
}

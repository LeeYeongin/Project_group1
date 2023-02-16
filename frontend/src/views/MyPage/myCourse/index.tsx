import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Totoro from '../../../asset/img/totoro.png';
import SideBar from '../MyPageSideBar';
import './style.css';

export default function MyCourse() {
  const [myCourseList, setMyCourseList] = useState<any[]>([]);
  const [cookies, setCookies] = useCookies();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${cookies.token}`
    }
  }

  const getMyCourseList = () => {
    
    axios
      .get('http://localhost:4040/myCourse/', requestOption)
      .then((Response) => {
        const tmp = [];
        console.log(Response.data.data.length);
        for (let i = 0; i < Response.data.data.length; i++) {
          for (let j = 0; j < Response.data.data[i].className.length; j++) {
            tmp.push({
              img: Response.data.data[i].className[j].img,
              className: Response.data.data[i].className[j].className,
            });
            console.log(tmp);
          }
        }
        console.log(tmp);
        setMyCourseList(tmp);
        console.log(myCourseList);
      })
      .catch((error) => {});
  };

  useEffect(() => {
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
            <SideBar />
            <div className="my-course-container">
              <div className="ex1">보유한 강의</div>
              <div className="list">
                {myCourseList.map((list: any) => (
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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import SideBar from '../MyPageSideBar';
import './style.css';

const gotopage = (idClass: number) => {
  window.location.href = `http://localhost:3000/main5/${idClass}`;
};

export default function MyPosting() {
  const [cookies, setCookies] = useCookies();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  };
  const [postList, setPostList] = useState<any[]>([]);

  const myPostingHandler = () => {
    axios
      .get(`http://localhost:4040/myProfile/writed`, requestOption)
      .then((Response) => {
        setPostList(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    myPostingHandler();
  }, []);

  return (
    <>
      <div className="head-bar1">
        <div className="profile1">게시글</div>
      </div>
      <div className="container1">
        <div className="main-container1">
          <>
            <SideBar />
            <div className="myPosting-main-contianer">
              <div className="posting-sub-title">내가 작성한 게시글</div>
              {postList.map((item) => (
                <div
                  className="posting-list-wrapper"
                  onClick={() => gotopage(item.idClass)}
                >
                  <div className="posting-title">
                    <a href="#">{item.className}</a>
                  </div>
                  <div className="posting-contents">{item.contents}</div>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

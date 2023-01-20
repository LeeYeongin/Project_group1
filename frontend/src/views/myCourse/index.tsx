import React from 'react'
import Totoro from '../../asset/img/totoro.png';
import './style.css';

export default function MyCourse() {
  return (
    <>
      <div className="mypage-select-header">
        <h4 className="my-course">내 학습</h4>
      </div>
      <div className="my-course-container">
        <div className="my-course-container-header">보유한 강의</div>
        <div className="my-course-container-find">
          <input type="text" />
          <button className="find-btn">검색</button>
        </div>
        <div className="my-course-wrapper">
          <div className="my-course-item">
            <div className="my-course-item-img">
              <img src={Totoro} alt="임시사진" />
            </div>
            <div className="my-course-item-title">
              React & Express 를 이용한 웹 어플리케이션 개발하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

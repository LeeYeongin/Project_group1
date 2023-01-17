import React from 'react'
import { useEffect, useState } from 'react';
import './style.css';

import DB_IMAGE from '../../asset/image_list/DB.png';
import STAR from '../../asset/image_list/star.png';
export default function List() {
    const [itemList, setItemList] = useState<any[]>([]);

  const categoryHandler = (arg: string) => {
    const tmp = [];

    const title = arg === 'ALL' ? "스프링 DB 1편 - 데이터 접근 핵심 원리" :
                  arg === 'BACK' ? "Back" :
                  arg === 'FRONT' ? "HTML + CSS + JS + React" :
                  arg === 'FULL' ? "풀스텍입니당" :
                  "데이터베이스 기본";

    for (let i = 0; i < 8; i++) {
      tmp.push({
        title,
        discription: "김영한",
        score: 50,
        price: '80,000',
        like: '+500명'
      })
    }
    setItemList(tmp);
  }

  useEffect(() => {
    const tmp = [];

    for (let i = 0; i < 8; i++) {
      tmp.push({
        title: "스프링 DB 1편 - 데이터 접근 핵심 원리",
        discription: "김영한",
        score: 50,
        price: '80,000',
        like: '+500명'
      })
    }

    setItemList(tmp);
  }, [])

  return (
        <>
          <div className="main-container">
              <div className="main">
                  <div className="container main2">
                      <div className="side-bar">
                          <div className="side-menu side-menu2" onClick={() => categoryHandler('ALL')}>전체강의</div>
                          <div className="side-menu side-menu2" onClick={() => categoryHandler('BACK')}>백엔드</div>
                          <div className="side-menu side-menu2" onClick={() => categoryHandler('FRONT')}>프론드엔드</div>
                          <div className="side-menu side-menu2" onClick={() => categoryHandler('FULL')}>풀스택</div>
                          <div className="side-menu side-menu2" onClick={() => categoryHandler('DBMS')}>데이터베이스</div>
                      </div>
                  </div>
                  <div className="container main3">
                      <div className="head-bar">
                          <div className="">강의 목록</div>
                          <div className="search">
                              <input type="text" className="search-input" placeholder="개발/프로그래밍 검색" />
                              <button className="search-btn">검색</button>
                          </div>
                      </div>
                      <div className="choice-menu">
                          <div className="myButton">전체</div>
                          <div className="hr"></div>
                          <div className="myButton fa-regular fa-percent">할인중</div>
                          <div className="hr"></div>
                          <div className="myButton fa-regular fa-star">입문</div>
                          <div className="myButton fa-regular fa-star-half-stroke">초급</div>
                          <div className="myButton fa-solid fa-star">중급이상</div>
                      </div>
                      <div className="list">
                          {itemList.map((item) => (
                              <div className="project-item">
                                  <div className="project-container">
                                      <div className="item-img-container">
                                          <img src={DB_IMAGE} />
                                      </div>
                                      <div className="item-content">
                                          <a href="#" className="item-title">{item.title}</a>
                                          <span className="item-discription">{item.discription}</span>
                                          <div className="item-img-container2"><img src={STAR} />({item.score})</div>
                                          <div className="item-footer">
                                              <div className="project-time"><i className="fa-solid fa-won-sign"></i>{item.price}</div>
                                              <button className="btn btn-test">{item.like}</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
        </>
  );
}
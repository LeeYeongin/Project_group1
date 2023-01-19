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
          <div className="main-container3">
              <div className="main3">
                  <div className="container main23">
                      <div className="side-bar3">
                          <div className="side-menu side-menu23" onClick={() => categoryHandler('ALL')}>전체강의</div>
                          <div className="side-menu side-menu23" onClick={() => categoryHandler('BACK')}>백엔드</div>
                          <div className="side-menu side-menu23" onClick={() => categoryHandler('FRONT')}>프론드엔드</div>
                          <div className="side-menu side-menu23" onClick={() => categoryHandler('FULL')}>풀스택</div>
                          <div className="side-menu side-menu23" onClick={() => categoryHandler('DBMS')}>데이터베이스</div>
                      </div>
                  </div>
                  <div className="container main33">
                      <div className="head-bar3">
                          <div className="">강의 목록</div>
                          <div className="search3">
                              <input type="text" className="search-input3" placeholder="개발/프로그래밍 검색" />
                              <button className="search-btn3">검색</button>
                          </div>
                      </div>
                      <div className="choice-menu3">
                          <div className="myButton3">전체</div>
                          <div className="hr3"></div>
                          <div className="myButton3 fa-regular3 fa-percent3">할인중</div>
                          <div className="hr3"></div>
                          <div className="myButton3 fa-regular3 fa-star3">입문</div>
                          <div className="myButton3 fa-regular3 fa-star-half-stroke3">초급</div>
                          <div className="myButton3 fa-solid3 fa-star3">중급이상</div>
                      </div>
                      <div className="list3">
                          {itemList.map((item) => (
                              <div className="project-item3">
                                  <div className="project-container3">
                                      <div className="item-img-container3">
                                          <img src={DB_IMAGE} />
                                      </div>
                                      <div className="item-content3">
                                          <a href="#" className="item-title3">{item.title}</a>
                                          <span className="item-discription3">{item.discription}</span>
                                          <div className="item-img-container23"><img src={STAR} />({item.score})</div>
                                          <div className="item-footer3">
                                              <div className="project-time3"><i className="fa-solid3 fa-won-sign3"></i>{item.price}</div>
                                              <button className="btn btn-test3">{item.like}</button>
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
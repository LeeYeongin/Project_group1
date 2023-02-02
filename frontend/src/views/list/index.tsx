import { useEffect, useState } from 'react';
import './style.css';

import axios from 'axios';

export default function List() {
    const [requestResult, setRequestResult] = useState<string>('')
    const [itemList, setItemList] = useState<any[]>([]);
    const [grade, setgrade] = useState<number>(0);
    const [search, setSearch] = useState<string>('')

    const showStar = (grade: number) =>{
      
      for(let i = 0; i < grade; i++){
        ;
      }
    };

    const allCategoryHandler = () => {
      setItemList([]);
      setgrade(0);

      axios.get("http://localhost:4040/list/all")
      .then((Response) => {
        const tmp = [];
        setRequestResult('success!');
  
        for(let i = 0; i < Response.data.data.length; i++){
          tmp.push({
            img: Response.data.data[i].img,
            className: Response.data.data[i].className,
            instructor: Response.data.data[i].instructor,
            price: Response.data.data[i].price,
            discountRate: Response.data.data[i].discountRate,
            studentCount: Response.data.data[i].studentCount,
            grade: Response.data.data[i].grade
          })
        }
        setItemList(tmp);
      })
      .catch((error) =>{
        setRequestResult('Failed!');
      })
    }

  const categoryHandler = (arg: string) => {
    setItemList([]);
    setgrade(0);

    const getdata = {
      category: arg
    };

    axios.post("http://localhost:4040/list/", getdata)
    .then((Response) => {
      const tmp = [];
      setRequestResult('success!');

      for(let i = 0; i < Response.data.data.length; i++){
        tmp.push({
          img: Response.data.data[i].img,
          className: Response.data.data[i].className,
          instructor: Response.data.data[i].instructor,
          price: Response.data.data[i].price,
          discountRate: Response.data.data[i].discountRate,
          studentCount: Response.data.data[i].studentCount,
          grade: Response.data.data[i].grade
        })
      }
      setItemList(tmp);
      
    })
    .catch((error) =>{
      setRequestResult('Failed!');
    })
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

  const searchHandler = () => {

    axios.get("http://localhost:4040/list/" + search)
    .then((Response) => {
      const tmp = [];
      setRequestResult('success!');

      for(let i = 0; i < Response.data.data.length; i++){
        tmp.push({
          img: Response.data.data[i].img,
          className: Response.data.data[i].className,
          instructor: Response.data.data[i].instructor,
          price: Response.data.data[i].price,
          discountRate: Response.data.data[i].discountRate,
          studentCount: Response.data.data[i].studentCount,
          grade: Response.data.data[i].grade
        })
      }
      setItemList(tmp);

    })
    .catch((error) =>{
      setRequestResult('Failed!');
    })
  }

  const difficultyHandler = () => {
    
  }

  return (
        <>
          <div className="main-container3">
              <div className="main3">
                  <div className="container3 main23">
                      <div className="side-bar3">
                          <div className="side-menu3 side-menu23" onClick={() => allCategoryHandler()}>전체강의</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('back')}>백엔드</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('front')}>프론드엔드</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('full')}>풀스택</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('dbms')}>데이터베이스</div>
                      </div>
                  </div>
                  <div className="container3 main33">
                      <div className="head-bar3">
                          <div className="">강의 목록</div>
                          <div className="search3">
                              <input type="text" id='search' className="search-input3" placeholder="개발/프로그래밍 검색" onChange={(e) => setSearch(e.target.value)}/>
                              <input type='button' className="search-btn3" value='검색' onClick={() => searchHandler()}></input>
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
                            <a href="/main5">
                              <div className="project-item3">
                                  <div className="project-container3">
                                      <div className="item-img-container3">
                                          <img src={item.img} />
                                      </div>
                                      <div className="item-content3">
                                          <a href="#" className="item-title3">{item.className}</a>
                                          <span className="item-discription3">{item.instructor}</span>
                                          <div className="item-img-container23">{showStar(0)}({item.grade});</div>
                                          <div className="item-footer3">
                                              <div className="project-time3"><i className="fa-solid3 fa-won-sign3"></i>{item.price}</div>
                                              <button className="btn3 btn-test3">{item.studentCount}</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </a>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
        </>
  );
}

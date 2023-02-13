import React, { useEffect, useState, KeyboardEvent} from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { Rating } from "@mui/material";
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function List() {
    const [requestResult, setRequestResult] = useState<string>('')
    const [itemList, setItemList] = useState<any[]>([]);
    const [grade, setgrade] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    
    const [category, setCategory] = useState<string>('all');
    const [discountRate, setDiscountRate] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<string>('notSelect');

    const { getcategory } = useParams<string>();
    
    
    // 엔터키 이벤트 엔터키를 누르면 serachHandler 작동
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter') {
        console.log();
        searchHandler();
      }
    }

     //상세페이지 이동
    const gotodetail = (idClass:number) => {
      axios.post(`http://localhost:3000/main5/${idClass}`);
      window.location.href = `http://localhost:3000/main5/${idClass}`;
    }

    // 별점보기 평균 읽어오기
  function ReadOnly(grade: any) {
    console.log(grade)
  const [value] = React.useState<number>(parseInt(grade));
    return(
      <Rating name="read-only" value={grade} readOnly />
    )
  }   

    const allCategoryHandler = () => {
      setItemList([]);
      setgrade(0);

      axios.get("http://localhost:4040/api/list/show/all")
      .then((Response) => {
        const tmp = [];
        setRequestResult('success!');
  
        for(let i = 0; i < Response.data.data.length; i++){
          tmp.push({
            idClass: Response.data.data[i].idClass,
            img: Response.data.data[i].img,
            className: Response.data.data[i].className,
            instructor: Response.data.data[i].instructor,
            price: Response.data.data[i].price,
            discountRateRate: Response.data.data[i].discountRateRate,
            studentCount: Response.data.data[i].studentCount,
            grade: Response.data.data[i].grade
          })
        }
        setItemList(tmp);
        setCategory('all');
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

    axios.post("http://localhost:4040/api/list/", getdata)
    .then((Response) => {
      const tmp = [];
      setRequestResult('success!');

      for(let i = 0; i < Response.data.data.length; i++){
        tmp.push({
          idClass: Response.data.data[i].idClass,
          img: Response.data.data[i].img,
          className: Response.data.data[i].className,
          instructor: Response.data.data[i].instructor,
          price: Response.data.data[i].price,
          discountRateRate: Response.data.data[i].discountRateRate,
          studentCount: Response.data.data[i].studentCount,
          grade: Response.data.data[i].grade
        })
      }
      setItemList(tmp);
      setCategory(arg);
    })
    .catch((error) =>{
      setRequestResult('Failed!');
    })
  }

  useEffect(() => {
    // const tmp = [];

    // for (let i = 0; i < 8; i++) {
    //   tmp.push({
    //     title: "스프링 DB 1편 - 데이터 접근 핵심 원리",
    //     discription: "김영한",
    //     score: 50,
    //     price: '80,000',
    //     like: '+500명'
    //   })
    // }
    const searchFlag =
      getcategory === 'all'
        ? false
        : getcategory === 'front'
        ? false
        : getcategory === 'fullstack'
        ? false
        : getcategory === 'database'
        ? false
        : getcategory === 'back'
        ? false
        : true;

    if (searchFlag) {
      axios
        .get('http://localhost:4040/api/list/' + getcategory)
        .then((Response) => {
          const tmp = [];
          setRequestResult('success!');

          for (let i = 0; i < Response.data.data.length; i++) {
            tmp.push({
              // idClass 추가
              idClass: Response.data.data[i].idClass,
              img: Response.data.data[i].img,
              className: Response.data.data[i].className,
              instructor: Response.data.data[i].instructor,
              price: Response.data.data[i].price,
              discountRateRate: Response.data.data[i].discountRateRate,
              studentCount: Response.data.data[i].studentCount,
              grade: Response.data.data[i].grade,
            });
            console.log(Response.data.data[i].idClass)
          }
          setItemList(tmp);
          
        })
        .catch((error) => {
          setRequestResult('Failed!');
        });
    } else {
      axios
        .get(`http://localhost:4040/api/list/show/${getcategory}`)
        .then((Response) => {
          console.log(getcategory);
          const tmp = [];
          setRequestResult('success!');

          for (let i = 0; i < Response.data.data.length; i++) {
            tmp.push({
              idClass: Response.data.data[i].idClass,
              img: Response.data.data[i].img,
              className: Response.data.data[i].className,
              instructor: Response.data.data[i].instructor,
              price: Response.data.data[i].price,
              discountRateRate: Response.data.data[i].discountRateRate,
              studentCount: Response.data.data[i].studentCount,
              grade: Response.data.data[i].grade,
            });
            console.log(Response.data.data[i].idClass)
          }
          setItemList(tmp);
        });
    }
  }, [])

  const searchHandler = () => {

    axios.get("http://localhost:4040/api/list/" + search)
    .then((Response) => {
      const tmp = [];
      setRequestResult('success!');

      for(let i = 0; i < Response.data.data.length; i++){
        tmp.push({
          idClass: Response.data.data[i].idClass,
          img: Response.data.data[i].img,
          className: Response.data.data[i].className,
          instructor: Response.data.data[i].instructor,
          price: Response.data.data[i].price,
          discountRateRate: Response.data.data[i].discountRateRate,
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



//--------------------------------------------------------------------------------------
  const listHandler = (arg: string, arg2: string, arg3: boolean) => {
    const getdata = {
      category: arg, 
      difficulty: arg2,
      discountRate: arg3
    };

    axios.post("http://localhost:4040/api/list/category", getdata)
    .then((Response) => {
      const tmp = [];
      setRequestResult('success!');

      for(let i = 0; i < Response.data.data.length; i++){
        tmp.push({
          idClass: Response.data.data[i].idClass,
          img: Response.data.data[i].img,
          className: Response.data.data[i].className,
          instructor: Response.data.data[i].instructor,
          price: Response.data.data[i].price,
          discountRateRate: Response.data.data[i].discountRateRate,
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

  const discount = () => {
    setDiscountRate(discountRate? false: true)
  }

  return (
        <>
          <div className="main-container3">
              <div className="main3">
                  <div className="container3 main23">
                      <div className="side-bar3">
                        {/*ClassService category 명과 일치 할것 아니면 못 읽어들임 */}
                          <div className="side-menu3 side-menu23" onClick={() => allCategoryHandler()}>전체강의</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('front')}>프론드엔드</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('back')}>백엔드</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('database')}>데이터베이스</div>
                          <div className="side-menu3 side-menu23" onClick={() => categoryHandler('fullstack')}>풀스택</div>
                      </div>
                  </div>
                  <div className="container3 main33">
                      <div className="head-bar3">
                          <div className="">강의 목록</div>
                          <div className="search3">
                              <input type="text" id='search' className="search-input3" placeholder="개발/프로그래밍 검색" onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress} />
                              <input type='button' className="search-btn3" value='검색' onClick={() => searchHandler()}></input>
                          </div>
                      </div>
                      <div className="choice-menu3">
                          <div className="myButton3" onClick={() => {setDifficulty('notSelect'); (category==='all') ? allCategoryHandler():categoryHandler(category)}}>전체</div>
                          <div className="hr3"></div>
                          <div className="myButton3 fa-regular3 fa-percent3" onClick={() => {discount(); listHandler(category, difficulty, discountRate)}}>할인중</div>
                          <div className="hr3"></div>
                          <div className="myButton3 fa-regular3 fa-star3" onClick={() => {setDifficulty('easy'); listHandler(category, difficulty, discountRate)}}>입문</div>
                          <div className="myButton3 fa-regular3 fa-star-half-stroke3"  onClick={() => {setDifficulty('middle'); listHandler(category, difficulty, discountRate)}}>초급</div>
                          <div className="myButton3 fa-solid3 fa-star3"  onClick={() => {setDifficulty('hard'); listHandler(category, difficulty, discountRate)}}>중급이상</div>
                      </div>
                      <div className="list3">
                          {itemList.map((item:any) => (
                            <a href= "#" onClick={() => gotodetail(item.idClass)}>
                              <div className="project-item3">
                                  <div className="project-container3">
                                      {/* <div className="item-img-container3"> */}
                                          <img src={item.img} className="item-img-container3" />
                                      {/* </div> */}
                                      <div className="item-content3">
                                          <a href="#" className="item-title3">{item.className}</a>
                                          <span className="item-discription3">{item.instructor}</span>
                                          <div className="item-img-container23"><Rating name="read-only" value={item.grade} readOnly />{item.grade}</div>
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

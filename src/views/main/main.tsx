import React from 'react';

import Luffy from '../Asset/images/luffy.png';

import Icon1 from '../Asset/images/front-end.png'
import Icon2 from '../Asset/images/spring.png'
import Icon3 from '../Asset/images/datascience.png'
import Icon4 from '../Asset/images/fullstack-icon.png'


import './main.css';
import Slider from './Slider';



function Main(){
    return(
        <div>
        <head>
            
        </head>
        <header>
        <div className="h_nav_bar">
            <div className="nav_bar_left">
                <div className="logo_box">
                    <img src={Luffy} className="luffy"/>
                    <a href="#" className="logohappy">
                        해-삐
                        <small className="shappy">Happy</small>
                    </a>
                </div>
                <div className="head_lecture_category">
                    <a href="#">강의목록</a>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
                <div className="nav_bar_right">
                    <div className="cart">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 9V6H8V4h3V1h2v3h3v2h-3v3ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.125 0-1.725-.988-.6-.987-.025-1.962L6.6 11.6 3 4H1V2h3.275l4.25 9h7.025l3.875-7 1.75.95-3.875 7q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h12v2Z"/></svg></a>
                    </div>
                    <div className="login_btn">
                        <a href="#">로그인</a>
                    </div>
                    <div className="sign_up">
                        <a href="#">회원가입</a>
                    </div>
                </div>
        </div>
        </header>
        {/*배너*/}
        <Slider/>
          {/* 검색 */}
        <div className="search_container">
            <div className="search_container_content">
                <h1>해-삐에서 가치를 높이세요</h1>
                <div className="search_wrapper">
                    <input type="text" className="m_search_input" maxLength={20} placeholder="배우고 싶은 지식을 검색하세요"/>
                    <button className="m_search_input_submit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
          {/* 아이콘 목록 */}
        <div className="lecture_icon_list">
            <div className="icon_list_wrapper">
                <ul>
                    <li>
                        <div className="icon_list_card">
                            <a href="#">
                                <img src={Icon1} alt="" className="course_icon"/>
                                <p className="img_title">#프론트엔드</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="icon_list_card">
                            <a href="#">
                                <img src={Icon2} alt="" className="course_icon"/>
                                
                                    <p className="img_title">#백엔드</p>
                                
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="icon_list_card">
                            <a href="#">
                                <img src={Icon3} alt=""  className="course_icon"/>
                                
                                    <p className="img_title" >#데이터베이스</p>
                                
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="icon_list_card">
                            <a href="#">
                                <img src={Icon4} alt=""  className="course_icon"/>
                                
                                    <p className="img_title">#풀스텍</p>
                                
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
          {/* 강의 목록 */}
        <div className="course_dashboard">
            <div className="course_dashboard_list"> 
                <div className="course_dashboard_title">                    
                    <span>
                        <h3>프론트엔드</h3>
                        <p style={{fontSize: "13px"}}>해삐와 함께하는 프론트엔드</p>
                    </span>
                </div> 
                <ul>
                    <li>
                    <img src="/images/exwebfront.png" alt="" className="course_face"/>
                        <div className="course_title">
                            React 완벽가이드
                        </div>
                        <div className="course_instructor">
                            해피코딩
                        </div>
                        <div className="course_rating">
                            4.7
                        </div>
                        <div className="course_price">
                            17000원
                        </div>
                        <div className="course_tag">
                            베스트셀러
                        </div>
                    </li>
                    <li>
                    <img src="/images/exwebfront.png" alt="" className="course_face"/>
                        <div className="course_title">
                            React 완벽가이드
                        </div>
                        <div className="course_instructor">
                            해피코딩
                        </div>
                        <div className="course_rating">
                            4.7
                        </div>
                        <div className="course_price">
                            17000원
                        </div>
                        <div className="course_tag">
                            베스트셀러
                        </div>
                    </li>
                    <li>
                    <img src="/images/exwebfront.png" alt="" className="course_face"/>
                        <div className="course_title">
                            React 완벽가이드
                        </div>
                        <div className="course_instructor">
                            해피코딩
                        </div>
                        <div className="course_rating">
                            4.7
                        </div>
                        <div className="course_price">
                            17000원
                        </div>
                        <div className="course_tag">
                            베스트셀러
                        </div>
                    </li>
                    <li>
                    <img src="/images/exwebfront.png" alt="" className="course_face"/>
                        <div className="course_title">
                            React 완벽가이드
                        </div>
                        <div className="course_instructor">
                            해피코딩
                        </div>
                        <div className="course_rating">
                            4.7
                        </div>
                        <div className="course_price">
                            17000원
                        </div>
                        <div className="course_tag">
                            베스트셀러
                        </div>
                    </li>
                    <li>
                    <img src="/images/exwebfront.png" alt="" className="course_face"/>
                        <div className="course_title">
                            React 완벽가이드
                        </div>
                        <div className="course_instructor">
                            해피코딩
                        </div>
                        <div className="course_rating">
                            4.7
                        </div>
                        <div className="course_price">
                            17000원
                        </div>
                        <div className="course_tag">
                            베스트셀러
                        </div>
                    </li>
                </ul>
            </div>
        </div>
          {/* footer */}
        <footer>
            
        </footer>
    </div>
    );
}

export default Main;
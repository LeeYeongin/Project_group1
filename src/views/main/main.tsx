import React from 'react';

import Icon1 from '../../asset/images/front-end.png'
import Icon2 from '../../asset/images/spring.png'
import Icon3 from '../../asset/images/datascience.png'
import Icon4 from '../../asset/images/fullstack-icon.png'

import './main.css';
import Banner from './Banner';
import FrontCarousel from './FrontCarousel';
import Footer from './Footer';
import Header from './Header';


function Main(){
    return(
        <div>
            {/* 해더 */}
            
            {/*배너*/}

            <Banner/>

            {/* 검색 */}
            <div className="search_container4">
                <div className="search_container_content4">
                    <h3>해-삐에서 가치를 높이세요</h3>
                    <div className="search_wrapper4">
                        <input type="text" className="m_search_input4" maxLength={20} placeholder="배우고 싶은 지식을 검색하세요"/>
                        <button className="m_search_input_submit4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#2779cc"><path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* 아이콘 목록 */}
            <div className="lecture_icon_list4">
                <div className="icon_list_wrapper4">
                    <ul>
                        <li>
                            <div className="icon_list_card4">
                                <a href= "#">
                                    <img src={Icon1} alt="" className="course_icon4"/>
                                    <p className="img_title4">#프론트엔드</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="icon_list_card4">
                                <a href="#">
                                    <img src={Icon2} alt="" className="course_icon4"/>
                                    
                                        <p className="img_title4">#백엔드</p>
                                    
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="icon_list_card4">
                                <a href="#">
                                    <img src={Icon3} alt=""  className="course_icon4"/>
                                    
                                        <p className="img_title4" >#데이터베이스</p>
                                    
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="icon_list_card4">
                                <a href="#">
                                    <img src={Icon4} alt=""  className="course_icon4"/>
                                    
                                        <p className="img_title4">#풀스텍</p>
                                    
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 강의 목록 */}
            {/* 프론트엔드 */}
            <FrontCarousel/>
            {/* 백앤드 */}
            {/* <div className="course_dashboard">
                <div className="course_dashboard_list"> 
                    <div className="course_dashboard_title">                    
                        <span>
                            <h3>백엔드</h3>
                            <p style={{fontSize: "13px"}}>해삐와 함께하는 백엔드</p>
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
            </div> */}
            {/* 데이터베이스 */}
            {/* <div className="course_dashboard">
                <div className="course_dashboard_list"> 
                    <div className="course_dashboard_title">                    
                        <span>
                            <h3>데이터베이스</h3>
                            <p style={{fontSize: "13px"}}>해삐와 함께하는 데이터베이스</p>
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
            </div> */}
            
            {/* 풀스텍 */}
            {/* <div className="course_dashboard">
                <div className="course_dashboard_list"> 
                    <div className="course_dashboard_title">                    
                        <span>
                            <h3>풀스텍</h3>
                            <p style={{fontSize: "13px"}}>해삐와 함께하는 풀스텍</p>
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
            </div> */}

            {/* footer */}
            <Footer/>
        </div>
    );
}

export default Main;
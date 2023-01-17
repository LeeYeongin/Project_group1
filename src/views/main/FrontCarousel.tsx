import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "react-slick";

import Course1 from '../../asset/images/exwebfront.png'
import Course2 from '../../asset/images/htmlbasic.png'

function Carousel() {
	const settings = {
    	dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        dotsClass: "custom-dots",
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    }
    return(        
    
        <div className="course_dashboard">
            <div className="course_dashboard_list"> 
                <div className="course_dashboard_title">                    
                    <span>
                        <h3>프론트엔드</h3>
                        <p style={{fontSize: "13px"}}>해삐와 함께하는 프론트엔드</p>
                    </span>
                </div> 
                <ul>
    	    <Slider {...settings}>
                    <li>
                    <img src={Course1} alt="" className="course_face"/>
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
                    <img src={Course2} alt="" className="course_face"/>
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
            </Slider>
                </ul>
            </div>
        </div>
    );
}

export default Carousel;
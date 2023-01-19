import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Course1 from '../../asset/images/exwebfront.png'
import Course2 from '../../asset/images/htmlbasic.png'

function Carousel() {
	const settings = {    	
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // swipeToSlide: true,        
        initialSlide: 1
    }
    return(
        
        <div className="course_dashboard">
            <div className="course_dashboard_list"> 
                <div className="course_dashboard_title">                    
                    <div>
                        <h3>프론트엔드</h3>
                        <p style={{fontSize: "13px"}}>해삐와 함께하는 프론트엔드</p>
                    </div>
                </div> 
                <div className="course_dashboard_card">
    	            <Slider {...settings}>
                    <div className="course_card">
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
                    </div>
                    <div className="course_card">
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
                    </div>
                    <div className="course_card">
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
                    </div>
                    <div className="course_card">
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
                    </div>
                    <div className="course_card">
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
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
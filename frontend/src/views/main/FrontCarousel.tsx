import React, { Component } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Course1 from '../../asset/images/exwebfront.png'
import Course2 from '../../asset/images/htmlbasic.png'

function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black"}}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
  
      return (
        <div className="course_dashboard4">
          <div className="course_dashboard_list4">
            <div className="course_dashboard_title4">
              <div>
                <h3>프론트엔드</h3>
                <p style={{ fontSize: "13px" }}>해삐와 함께하는 프론트엔드</p>
              </div>
            </div>
            <div className="course_dashboard_card4">
              <Slider {...settings}>
                <div className="course_card4">
                  <img src={Course1} alt="" className="course_face4" />
                  <div className="course_title4">React 완벽가이드</div>
                  <div className="course_instructor4">해피코딩</div>
                  <div className="course_rating4">4.7</div>
                  <div className="course_price4">17000원</div>
                  <div className="course_tag4">베스트셀러</div>
                </div>
                <div className="course_card4">
                  <img src={Course2} alt="" className="course_face4" />
                  <div className="course_title4">React 완벽가이드</div>
                  <div className="course_instructor4">해피코딩</div>
                  <div className="course_rating4">4.7</div>
                  <div className="course_price4">17000원</div>
                  <div className="course_tag4">베스트셀러</div>
                </div>
                <div className="course_card4">
                  <img src={Course1} alt="" className="course_face4" />
                  <div className="course_title4">React 완벽가이드</div>
                  <div className="course_instructor4">해피코딩</div>
                  <div className="course_rating4">4.7</div>
                  <div className="course_price4">17000원</div>
                  <div className="course_tag4">베스트셀러</div>
                </div>
                <div className="course_card4">
                  <img src={Course1} alt="" className="course_face4" />
                  <div className="course_title4">React 완벽가이드</div>
                  <div className="course_instructor4">해피코딩</div>
                  <div className="course_rating4">4.7</div>
                  <div className="course_price4">17000원</div>
                  <div className="course_tag4">베스트셀러</div>
                </div>
                <div className="course_card4">
                  <img src={Course1} alt="" className="course_face4" />
                  <div className="course_title4">React 완벽가이드</div>
                  <div className="course_instructor4">해피코딩</div>
                  <div className="course_rating4">4.7</div>
                  <div className="course_price4">17000원</div>
                  <div className="course_tag4">베스트셀러</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      );
    }
  }
  
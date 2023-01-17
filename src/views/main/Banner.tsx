import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner1 from "../../asset/images/webhtml.png";
import Banner2 from "../../asset/images/Isometric_Illustration.png";
import Banner3 from "../../asset/images/database-unscreen.gif";
import Banner4 from "../../asset/images/PremiumVector.jpg";

import './banner.css'

function Banner() {
  return (
    <div className="swipe_container">
      <Carousel>
        <Carousel.Item interval={3000}>
          <div id="box1" className="box">
            <a href="#">
              <div className="box_text">
                <div className="box_title1">
                    <div>
                    프론트엔드
                    </div>
                </div>
                <h1>HTML부터 <br />CSS, JavaScript,<br /> React 까지</h1>
              </div>    
              <div className="box_img">
                <img src={Banner1} alt="" className="b-img" />
              </div>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div id="box2" className="box">
            <a href="#">
              <div className="box_text">
              <div className="box_title2">
                    <div>
                    백엔드
                    </div>
              </div>
                <h1>나는야<br />백엔드 개발자!<br />우리 같이 시작하자!</h1>
              </div>
              <div className="box_img">
                <img src={Banner2} alt="" className="b-img" />
              </div>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div id="box3" className="box">
            <a href="#">
              <div className="box_text">
              <div className="box_title3">
                    <div>
                    데이터베이스
                    </div>
              </div>
                <h1>데이터베이스<br />나에게 맞기시라<br />Vamos!</h1>
              </div>
              <div className="box_img">
                <img src={Banner3} alt="" className="b-img" />
              </div>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div id="box4" className="box">
            <a href="#">
              <div className="box_text">
              <div className="box_title4">
                    <div>
                    풀스텍 개발자
                    </div>
              </div>
                <h1>들어는 보았는가?<br />그 이름도 위대한<br />풀스텍 개발자</h1>
              </div>
              <div className="box_img">
                <img src={Banner4} alt="" className="b-img" />
              </div>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;

import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import axios from "axios";
// import { useEffect } from "react";

import '../main/css/CarouselArrow.css';

import Course1 from '../../asset/images/exwebfront.png'
import Course2 from '../../asset/images/htmlbasic.png'
import { useParams } from "react-router-dom";


// 별점보기 수강평 등록후 평균 읽어오기
  function ReadOnly() {
  const [value] = React.useState<number>(5);
    return(
      <Rating name="read-only" value={value} readOnly />
    )
  }

  const [connection, setConnection] = useState<string>('');

  const connectionTest = () =>{
    axios.get('http://localhost:4040/front').then((response) => {
      setConnection("success!");

    }).catch((error)=>{
      setConnection(error.message);
    })
  }

  useEffect(() => {
    connectionTest();
  },[]);


    
  const CarouselMap = [

  {
      category:'connection',
      subtitle: 'forntend',
      lectures:[
              {
                  img: "",
                  title:"프론트엔드",
                  name: "프론트강사",
                  rating: 3,
                  price: 17000,
                  tag: true
              },
              {
                  img: "",
                  title:"프론트엔드",
                  name: "프론트강사",
                  rating: 3,
                  price: 17000,
                  tag: true
              },
              {
                  img: "",
                  title:"프론트엔드",
                  name: "프론트강사",
                  rating: 3,
                  price: 17000,
                  tag: true
              },
              {
                  img: "",
                  title:"프론트엔드",
                  name: "프론트강사",
                  rating: 3,
                  price: 17000,
                  tag: true
              },
              {
                  img: "",
                  title:"프론트엔드",
                  name: "프론트강사",
                  rating: 3,
                  price: 17000,
                  tag: true
              }
      ]
  },
  {
      category:"백엔드",
      subtitle: 'backend',
      lectures:[
          {
              img: "",
              title:"백엔드",
              name: "백엔드강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"백엔드",
              name: "백엔드강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"백엔드",
              name: "백엔드강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"백엔드",
              name: "백엔드강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"백엔드",
              name: "백엔드강사",
              rating: 3,
              price: 17000,
              tag: true
          },
      ]
  },
  {
      category:"데이터베이스",
      subtitle: 'database',
      lectures:[
          {
              img: "",
              title:"데이터베이스",
              name: "데이터베이스강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"데이터베이스",
              name: "데이터베이스강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"데이터베이스",
              name: "데이터베이스강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"데이터베이스",
              name: "데이터베이스강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"데이터베이스",
              name: "데이터베이스강사",
              rating: 3,
              price: 17000,
              tag: true
          }
      ]
  },
  {
      category:"풀 스택",
      subtitle: 'full stack',
      lectures:[
          {
              img: "",
              title:"풀 스택",
              name: "풀 스택강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"풀 스택",
              name: "풀 스택강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"풀 스택",
              name: "풀 스택강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"풀 스택",
              name: "풀 스택강사",
              rating: 3,
              price: 17000,
              tag: true
          },
          {
              img: "",
              title:"풀 스택",
              name: "풀 스택강사",
              rating: 3,
              price: 17000,
              tag: true
          },
      ]
  }
]

const STUDY = CarouselMap.map((cm) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return(
    <div className="course_dashboard_list4">
    <div className="course_dashboard_title4">
      <div key = {cm.category}>
          <p>{connection}</p>
          <p style={{ fontSize: "13px" }}>{cm.subtitle}</p>
      </div>
    </div>
    <div className="course_dashboard_card4">
      <Slider {...settings}>
        {cm.lectures.map((item) => (
          <a href="/main5">
            <div className="course_card4">
          <img src={Course1} alt="" className="course_face4" />
          <div className="course_title4">{item.title}</div>
          <div className="course_instructor4">{item.name}</div>
          <div className="course_rating4"><ReadOnly/></div>
          <div className="course_price4">{item.price} 원</div>
          <div className="course_tag4">{item.tag && '베스트셀러'}</div>
        </div>
          </a>
          
        ))}
      </Slider>
    </div>
  </div>
  )
})

export default class CustomCarousel extends Component {
  render() {
    

    return (
      <div className="course_dashboard4">
        {STUDY}
      </div>
    );
  }
}
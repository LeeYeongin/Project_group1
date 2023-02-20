import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from '@mui/material/Rating';
import axios, { AxiosResponse } from 'axios';
import '../main/css/CarouselArrow.css';

import { useParams } from 'react-router-dom';

// 별점보기 평균 읽어오기
function ReadOnly(grade: any) {
  console.log(grade);
  const [value] = React.useState<number>(parseInt(grade));
  return <Rating name="read-only" value={grade} readOnly />;
}

interface StudyProps {
  carouselMap: any[];
}

const Study = ({ carouselMap }: StudyProps) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  //상세페이지 이동
  const gotopage = (idClass: number) => {
    window.location.href = `http://localhost:3000/main5/${idClass}`;
  };

  return (
    <>
      {carouselMap.map((cm) => (
        <div className="course_dashboard_list4">
          <div className="course_dashboard_title4">
            <div key={cm.category}>
              <div>
                <h3>{cm.category}</h3>
                <p style={{ fontSize: '13px' }}>{cm.subtitle}</p>
              </div>
            </div>
            <div className="course_dashboard_card4">
              <Slider {...settings}>
                {cm.lectures.map((item: any) => (
                  <a href="#" onClick={() => gotopage(item.idClass)}>
                    <div className="course_card4">
                      <img src={item.img} alt="" className="course_face4" />
                      <div className="course_title4">{item.className}</div>
                      <div className="course_instructor4">
                        {item.instructor}
                      </div>
                      <div className="course_rating4">
                        <Rating name="read-only" value={item.grade} readOnly />
                      </div>
                      <div className="course_price4">{item.price}원</div>
                      <div className="course_studentCount4">
                        +{item.studentCount}명
                      </div>
                    </div>
                  </a>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default function CustomCarousel() {
  const [carouselMap, setCarouselMap] = useState<any[]>([]);
  const [click, setClick] = useState<any[]>([]);

  const connectionCarousel = async () => {
    const tmp = [];

    //front강의 가져오기
    const frontList = await axios.get(
      'http://localhost:4040/api/carousel/front'
    );

    tmp.push({
      category: '프론트',
      subtitle: 'front',
      lectures: (frontList as AxiosResponse<any, any>).data.data,
    });
    console.log(tmp);

    //back강의 가져오기
    const backList = await axios.get('http://localhost:4040/api/carousel/back');

    //CarouselMap에 넣을배열(백엔드) 임시변수 tmp에 push
    tmp.push({
      category: '백엔드',
      subtitle: 'back',
      lectures: (backList as AxiosResponse<any, any>).data.data,
    });

    //database강의 가져오기
    const databaseList = await axios.get(
      'http://localhost:4040/api/carousel/db'
    );

    //CarouselMap에 넣을배열(데이터베이스) 임시변수 tmp에 push
    tmp.push({
      category: '데이터베이스',
      subtitle: 'database',
      lectures: (databaseList as AxiosResponse<any, any>).data.data,
    });

    //Fullstack강의 가져오기
    const fullstackList = await axios.get(
      'http://localhost:4040/api/carousel/full'
    );

    //CarouselMap에 넣을배열(풀스텍) 임시변수 tmp에 push
    tmp.push({
      category: '풀스택',
      subtitle: 'fullstack',
      lectures: (fullstackList as AxiosResponse<any, any>).data.data,
    });

    // CarouselMap에 값 넣기(front, back)
    setCarouselMap(tmp);
  };

  useEffect(() => {
    connectionCarousel();
  }, []);

  return (
    <div className="course_dashboard4">
      <Study carouselMap={carouselMap} />
    </div>
  );
}

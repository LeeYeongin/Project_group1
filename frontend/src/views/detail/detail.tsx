import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carlist from './content2/CarList';
import ReviewList from "./content3/ReviewList";
import './detail.css';

function Main5(){
    // 클릭시 스크롤 이동
    const idRef1 = useRef<HTMLDivElement>(null);
    const idRef2 = useRef<HTMLDivElement>(null);
    const idRef3 = useRef<HTMLDivElement>(null);

    // idClass 입력시 파람으로 받도록 설정
    const { idClass } = useParams<string>();

    const onScrollClick = (id : string) => {
        if(id === 'content1') idRef1.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'content2') idRef2.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'content3') idRef3.current?.scrollIntoView({ behavior: 'smooth' });
    };
    // 스크롤시 상단 고정
    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 631) {
          setScrollY(window.pageYOffset);
          setScrollActive(true);
        } else {
          setScrollY(window.pageYOffset);
          setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll);
        }
        scrollListener();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    // 클래스ID를 받아 출력하기위한 함수 부분
    const [detailItems, setDetailItems] = useState<any>(null);

    useEffect(() => {
        axios.get(`http://localhost:4040/main5/${idClass}/`).then((response) => {
            setDetailItems(response.data.data);
        })  
    }, []);

    const putCart = () => {
        // id와 함께 장바구니로 넘어감
        axios.post('http://localhost:4040/cart/add', idClass);
        window.location.href = ('/cart');
    }

    console.log(detailItems);
    // 출력부분
    return(
        <>
            {detailItems && (
                <div className='detail5_main' key={detailItems.idClass}>
                    <div className='detail5_topbanner'>
                        <div className='detail5_top_body'>
                            <div className='detail5_img' style={{backgroundImage: `${detailItems.img}`}}/>
                            <div className='detail5_title'>
                                <p>{detailItems.category}</p>
                                <p id='item5_title'>{detailItems.className}</p>
                                <p id='item5_teacher'>{detailItems.instrouctor}</p>
                                <p>{detailItems.classInfoSimple}</p>
                            </div>
                        </div>
                    </div> 
                    <div className= {ScrollActive ? 'detail5_menu5 fixed' : 'detail5_menu5'}>
                        <div className='menu5_list'>
                            <div className='menu5'><button type="button" onClick={() => onScrollClick('content1')}>강의소개</button></div>
                            <div className='menu5'><button type="button" onClick={() => onScrollClick('content2')}>커리큘럼</button></div>
                            <div className='menu5'><button type="button" onClick={() => onScrollClick('content3')}>수강평</button></div>
                        </div>
                    </div> 
                    <div className='detail5_content'>
                        <div className='detail5_content_main'>
                            <div id='content1' className= {ScrollActive ? 'con5 scroll' : 'con5'} ref={idRef1}>
                                <h1>강의소개</h1>
                                <div className="explan">
                                    <p>{detailItems.classInfoDtl}</p>
                                    <br/>
                                    <p>{detailItems.classInfoDtl}</p>
                                </div>
                            </div>
                            <div id='content2' className= 'con5' ref={idRef2}>
                                <h1>커리큘럼</h1>
                                <Carlist curriItems = {detailItems.curriculumList}/>
                            </div>
                            <div id='content3' className= 'con5'  ref={idRef3}>
                                <h1>수강평</h1>
                                <ReviewList idClass={idClass} reviewItems = {detailItems.reviewList}/>
                            </div>
                        </div>
                        {/* 장바구니 */}
                        <div className='detail5_payment'>
                            <div className='pay_body5'>
                                <div className='money'>{detailItems.price}원</div>
                                <button id='login_backet' className='backet5' onClick={putCart}>장바구니</button>
                                <div className='sub5'>
                                    <ul>
                                        <li id="teacher">{detailItems.instructor}</li>
                                        <li id="">{detailItems.difficulty}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} 
        </>
    );
}

export default Main5;
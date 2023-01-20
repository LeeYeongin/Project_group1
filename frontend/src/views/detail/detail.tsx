import React, { useRef, useState, useEffect } from "react";
import Carlist from './content2/CarList';
import ReviewList from "./content3/ReviewList";
import './detail.css';

function Main5(){
    // 클릭시 스크롤 이동
    const idRef1 = useRef<HTMLDivElement>(null);
    const idRef2 = useRef<HTMLDivElement>(null);
    const idRef3 = useRef<HTMLDivElement>(null);

    const onScrollClick = (id : string) => {
        if(id === 'con5tent1') idRef1.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'con5tent2') idRef2.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'con5tent3') idRef3.current?.scrollIntoView({ behavior: 'smooth' });
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

    const putCart = () => {
      // id와 함께 장바구니로 넘어감
      window.location.href = ('/cart');
    }

    return(
        <div className='detail5_main'>
            <div className='detail5_topbanner'>
                <div className='detail5_top_body'>
                    <div className='detail5_img'>
                    </div>
                    <div className='detail5_title'>
                        <p>들어온 경로</p>
                        <p id='item5_title'>강의명</p>
                        <p id='item5_teacher'>강사명</p>
                        <p>강의 간단 설명란</p>
                    </div>
                </div>
            </div> 
            <div className= {ScrollActive ? 'detail5_menu5 fixed' : 'detail5_menu5'}>
                <div className='menu5_list'>
                    <div className='menu5'><button type="button" onClick={() => onScrollClick('con5tent1')}>강의소개</button></div>
                    <div className='menu5'><button type="button" onClick={() => onScrollClick('con5tent2')}>커리큘럼</button></div>
                    <div className='menu5'><button type="button" onClick={() => onScrollClick('con5tent3')}>수강평</button></div>
                </div>
            </div> 
            <div className='detail5_content'>
                <div className='detail5_content_main'>
                    <div id='content1' className= {ScrollActive ? 'con5 scroll' : 'con5'} ref={idRef1}>
                        <h1>강의소개</h1>
                        <div className="explan">
                            <p>강의 설명</p>
                            <p>- 이강의는 ~~~~~~~~~~~하는 강의입니다.</p>
                        </div>
                        <p>강의 특징</p>
                        <p>
                            사용언어 : xxx<br/>
                            학습방법<br/>
                            * 1. AAA<br/>
                            * 2. BBB
                        </p>
                        <p>연관강의 링크</p>
                    </div>
                    <div id='content2' className= 'con5' ref={idRef2}>
                        <h1>커리큘럼</h1>
                        <Carlist/>
                    </div>
                    <div id='content3' className= 'con5'  ref={idRef3}>
                        <h1>수강평</h1>
                        <ReviewList/>
                    </div>
                </div>
                {/* 장바구니 */}
                <div className='detail5_payment'>
                    <div className='pay_body5'>
                        <div className='money'>가격[상품별로 따로표기]</div>
                        <button id='login_backet' className='backet5' onClick={putCart}>장바구니</button>
                        <div className='sub5'>
                            <ul>
                                <li id="teacher">강사명</li>
                                <li id="">난이도</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Main5;
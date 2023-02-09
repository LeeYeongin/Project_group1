import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

    const [idUser, setIdUser] = useState<string>('aaa');

    // 구매 여부 확인
    const [status, setStatus] = useState<boolean>(true);
    const [statusItem, setSetatusItem] = useState<any[]>([]);
    let classItem:any[] = [];

    useEffect(() => {
        async function URL() {
            await axios.get((`http://localhost:4040/orderlist/${idUser}`)).then((response) => {
            setSetatusItem(response.data.data);
            })
        }
        URL();
        console.log("받은값2", statusItem);

        statusItem.forEach((item) => {
            classItem.push(item.className);
        });

        console.log("현재값", classItem);
        let num = 0;
    }, []);

    const navigator = useNavigate();

    // 클릭시 클래스 추가 이벤트
    const [select, setSelect] = useState<string>('');

    const onScrollClick = (id : string) => {
        if(id === 'content1') idRef1.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'content2') idRef2.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'content3') idRef3.current?.scrollIntoView({ behavior: 'smooth' });

        setSelect(id);
    };

    const btnList = [
        {
            id: 1,
            divId: 'content1',
            divTitle: '강의소개'
        },
        {
            id: 2,
            divId: 'content2',
            divTitle: '커리큘럼'
        },
        {
            id: 3,
            divId: 'content3',
            divTitle: '수강평'
        }
    ]

    const ScrollBtn = btnList.map((BTN) => {
        return(
            <button key={BTN.id} className={`${select === BTN.divId ? 'menu5 view' : 'menu5'}`} type="button" onClick={() => onScrollClick(BTN.divId)}>{BTN.divTitle}</button>
        )
    })

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
        axios.get(`http://localhost:4040/api/main5/${idClass}/`).then((response) => {
            setDetailItems(response.data.data);
        })  
    }, []);

    // 장바구니 이동
    const putCart = () => {
        const addCart = { idUser, idClass }
        // id와 함께 장바구니로 넘어감
        axios.post('http://localhost:4040/api/cart/add', addCart);
        navigator('/list/all');
    }

    const moveMyPage = () => {
        navigator('/myCourse');
    }

    // 출력부분
    return(
        <>
            {detailItems && (
                <div className='detail5_main' key={detailItems.idClass}>
                    <div className='detail5_topbanner'>
                        <div className='detail5_top_body'>
                            <img className='detail5_img' src={detailItems.img}/>
                            <div className='detail5_title'>
                                <p>{detailItems.category}</p>
                                <p id='item5_title'>{detailItems.className}</p>
                                <p id='item5_teacher'>{detailItems.instrouctor}</p>
                                <p>{detailItems.classInfoSimple}</p>
                            </div>
                        </div>
                    </div> 
                    <div className= {ScrollActive ? 'detail5_menu5 fixed' : 'detail5_menu5'}>
                        <div className='menu5_list'>{ScrollBtn}</div>
                    </div> 
                    <div className='detail5_content'>
                        <div className='detail5_content_main'>
                            <div id='content1' className= {ScrollActive ? 'con5 scroll' : 'con5'} ref={idRef1}>
                                <h1>강의소개</h1>
                                <div className="explan">
                                    <p id="item5_infoDtl">{detailItems.classInfoDtl}</p>
                                    <br/>
                                    <p id="item5_infoDtl">{detailItems.classInfoDtl}</p>
                                </div>
                            </div>
                            <div id='content2' className= 'con5' ref={idRef2}>
                                <h1>커리큘럼</h1>
                                <Carlist curriItems = {detailItems.curriculumList}/>
                            </div>
                            <div id='content3' className= 'con5'  ref={idRef3}>
                                <h1>수강평</h1>
                                <ReviewList idUser={idUser} idClass={idClass} reviewItems = {detailItems.reviewList}/>
                            </div>
                        </div>
                        {/* 장바구니 */}
                        <div className='detail5_payment'>
                            <div className='pay_body5'>
                                <div className='money'>{detailItems.price}원</div>
                                <button id='login_backet' className={status ? 'backet5' : 'disabled'} onClick={putCart}>장바구니</button>
                                <button id='login_backet' className={status ? 'disabled' : 'backet5'} onClick={moveMyPage}>마이페이지로 이동</button>
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
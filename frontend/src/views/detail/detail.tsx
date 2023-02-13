import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../stores";
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

    const [cookies] = useCookies();
    const [idUser, setIdUser] = useState<string>('');

    const [detailItems, setDetailItems] = useState<any>(null);
    const [instruct, setInstruct] = useState<any>([]);

    // 구매 여부 확인
    const [status, setStatus] = useState<boolean>(true);
    const [statusItem, setSetatusItem] = useState<any[]>([]);
    let classItem:any[] = [];
    let classItem2:any = [];

    // console.log(token);
    const getClassDetailHandler = async (token: string) => {
        const requestOption = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }

        axios.get('http://localhost:4040/myProfile', requestOption)
        .then((response) => {
            setIdUser(response.data.data.userId);
            console.log(idUser);
        })
    }
    async function URL() {
        await axios.get((`http://localhost:4040/api/orderlist/${idUser}`)).then((response) => {
        setSetatusItem(response.data.data);
        })
    }

    // 클래스ID를 받아 출력하기위한 함수 부분
    useEffect(() => {
        axios.get(`http://localhost:4040/api/main5/${idClass}/`).then((response) => {
            setDetailItems(response.data.data);
            setInstruct(response.data.data.instructor);
        })  
    }, []);

    useEffect(() => {
        getClassDetailHandler(cookies.token);
        URL();
        
        statusItem.map((test) => {
            classItem = test.className;
            classItem.map((test2) => {
                classItem2 = test2.idClass;
                if(classItem2 == idClass){
                    setStatus(false);
                }
            })
        })
    }, []);

    const navigator = useNavigate();

    // 클릭 스크롤
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

    // 장바구니 이동
    const putCart = () => {
        const requestOption = {
            headers: {
              Authorization: `Bearer ${cookies.token}`
            }
        }
        const addCart = {idClass: idClass}
        // id와 함께 장바구니로 넘어감
        axios.post('http://localhost:4040/api/cart/add', addCart, requestOption)
        .then((response) => {
            if(!response.data.status) {
                alert('이미 장바구니에 있는 강의입니다.')
                navigator('/cart');
            }else {
                alert('장바구니에 담겼습니다.')
            }
        })
        // navigator('/list/all');
        
    }

    const moveMyPage = () => {
        navigator('/myCourse');
    }

    // 출력부분
    return(
        <>
            {detailItems && instruct && (
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
                                    <div className="instruct5">
                                        <img className="instruct_img" src={instruct[0].instructorImg}/>                                    
                                        <p className="instruct_dtl">{instruct[0].instructorInfo}</p>
                                    </div>
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
                                        <li id="teacher" key={instruct[0].idInstructor}>
                                            {instruct[0].instructorName}
                                        </li>
                                        <li>
                                            { 
                                                detailItems.difficulty === 'easy' && '입문' ||
                                                detailItems.difficulty === 'middle' && '초급' ||
                                                detailItems.difficulty === 'hard' && '중급'
                                            }
                                        </li>
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
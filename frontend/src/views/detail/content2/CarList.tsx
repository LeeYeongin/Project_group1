import axios from "axios";
import React, { useState } from "react";
import './CarList.css';

const CarList = () => {
    // 3개만 있을때 발생, 3개이상 될시 ul에 갯수에따른 useState값과 토글메뉴가 따로 생성되어야 한다.
    const [isOpen1, setMenu1] = useState(false);  // 메뉴의 초기값을 false로 설정
    const [isOpen2, setMenu2] = useState(false);  // 메뉴의 초기값을 false로 설정
    const [isOpen3, setMenu3] = useState(false);  // 메뉴의 초기값을 false로 설정
    
    const toggleMenu1 = () => { setMenu1(isOpen1 => !isOpen1); } // on,off 개념 boolean
    const toggleMenu2 = () => { setMenu2(isOpen2 => !isOpen2); } // on,off 개념 boolean
    const toggleMenu3 = () => { setMenu3(isOpen3 => !isOpen3); } // on,off 개념 boolean

    return(
        <div className="car5_list">
            <ul className="car5_title" onClick={() => toggleMenu1()}>강의 1
                <li className={isOpen1 ? "car5_item" : "hide_item"}><span>강의 1-1. AAA</span></li>
                <li className={isOpen1 ? "car5_item" : "hide_item"}><span>강의 1-2. BBB</span></li>    
            </ul>
            <ul className="car5_title" onClick={() => toggleMenu2()}> 강의 2
                <li className={isOpen2 ? "car5_item" : "hide_item"}><span>강의 2-1. AAA</span></li>
                <li className={isOpen2 ? "car5_item" : "hide_item"}><span>강의 2-2. BBB</span></li>    
            </ul>
            <ul className="car5_title" onClick={() => toggleMenu3()}>강의 3
                <li className={isOpen3 ? "car5_item" : "hide_item"}><span>강의 3-1. AAA</span></li>
                <li className={isOpen3 ? "car5_item" : "hide_item"}><span>강의 3-2. BBB</span></li>    
            </ul>
        </div>
    );
}

export default CarList;
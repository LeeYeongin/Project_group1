import React, { useState } from "react";
import './CarList.css';

interface ItemProps{
    curriItems: any[]
}

const CarList = ({curriItems}: ItemProps) => {
    // 3개만 있을때 발생, 3개이상 될시 ul에 갯수에따른 useState값과 토글메뉴가 따로 생성되어야 한다.

    const [isOpen1, setMenu1] = useState(false);  // 메뉴의 초기값을 false로 설정
    const toggleMenu1 = () => { setMenu1(isOpen1 => !isOpen1); } // on,off 개념 boolean 

    return(
        <div className="car5_list">
            {curriItems.filter((arr, index, callback) => index === callback.findIndex((item) => item.section === arr.section)).map((item) => (
                <ul className="car5_title" onClick={() => toggleMenu1()} key={item.idCurriculum}>강의 {item.section}
                {curriItems.filter((arr, index, callback) => index === callback.findIndex((item2) => item2.section === arr.section)).map((item2) => (
                    <li className={isOpen1 ? "car5_item" : "hide_item"}><span>강의 {item2.part} {item2.video}</span></li>
                ))}
                </ul>
            ))}
        </div>
    );
}

export default CarList;
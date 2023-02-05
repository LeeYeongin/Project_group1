import axios from 'axios';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropButton() {

    //상세페이지 이동
const gotolist = (getcategory:any) => {
    // axios.post(`http://localhost:4040/${getcategory}`);
    window.location.href = `http://localhost:3000/list/${getcategory}`;
}

    

    return (
    <DropdownButton id="dropdown-basic-button" title="강의목록" drop="end">
        <Dropdown.Item href="#" onClick={() => gotolist("all")}>전체강의</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => gotolist("front")}>프론트엔드</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => gotolist("back")}>백엔드</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => gotolist("database")}>데이테베이스</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => gotolist("fullstack")}>풀스택</Dropdown.Item>
    </DropdownButton>
    );
}

export default DropButton;

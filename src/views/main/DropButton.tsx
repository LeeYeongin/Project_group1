import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropButton() {
    return (
    <DropdownButton id="dropdown-basic-button" title="강의목록" drop="end">
        <Dropdown.Item href="#/action-1">전체강의</Dropdown.Item>
        <Dropdown.Item href="#/action-2">프론트엔드</Dropdown.Item>
        <Dropdown.Item href="#/action-3">백엔드</Dropdown.Item>
        <Dropdown.Item href="#/action-4">데이테베이스</Dropdown.Item>
        <Dropdown.Item href="#/action-5">풀스텍</Dropdown.Item>
    </DropdownButton>
    );
}

export default DropButton;

import { Logout } from '@mui/icons-material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Logo from '../../asset/images/logo.png';
import { useUserStore } from '../../stores';
import DropButton from './DropButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

interface props {
  setOpen: any;
}

function Header({ setOpen }: props) {
  const [email2, setEmail2] = useState<string>('');
  const [cookies, setCookies] = useCookies();
  const { user, setUser, removeUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    // alert(cookies.token);
    if (cookies.token && !user) {
      axios
        .get('http://localhost:4040/myProfile', {
          headers: { Authorization: `Bearer ${cookies.token}` },
        })
        .then((response) => {
          const data = response.data.data;
          setUser(data);
        });
    }
    if (!cookies.token) {
      removeUser();
    }
  }, [cookies.token, user]);

  const logOutHandler = () => {
    setCookies('token', '', { path: '/', expires: new Date() });
    removeUser();
    alert('다음에 또 만나요!');
    navigate(`/`);
  };

  const gotoSignup = () => {
    window.location.href = `http://localhost:3000/signup`;
  };
  return (
    <header>
      <div className="h_nav_bar4">
        <div className="nav_bar_left4">
          <div className="logo_box4">
            <a href="/">
              <img src={Logo} className="logo_mark4" />
            </a>
          </div>
          <div className="head_lecture_category4">
            <DropButton />
          </div>
        </div>
        <div className="nav_bar_right4">
          {/* not-login when customer visit now */}
          {cookies.token === undefined ? (
            <>
              <div className="login_btn4">
                <a onClick={() => setOpen(true)}>로그인</a>
              </div>
              <div className="sign_up4" onClick={() => gotoSignup()}>
                <a>회원가입</a>
              </div>
            </>
          ) : (
            <>
              <div className="cart4">
                <a href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                  >
                    <path d="M11 9V6H8V4h3V1h2v3h3v2h-3v3ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.125 0-1.725-.988-.6-.987-.025-1.962L6.6 11.6 3 4H1V2h3.275l4.25 9h7.025l3.875-7 1.75.95-3.875 7q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h12v2Z" />
                  </svg>
                </a>
              </div>
              <div className="logout_btn4">
                <a onClick={() => logOutHandler()}>로그아웃</a>
              </div>
              <div className="myprofile4">
                <a href="/myProfile">
                  <AccountCircleIcon fontSize="large" />
                  {/* {user.name}님 환영합니다. */}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;

import { Logout } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';

import Logo from '../../asset/images/logo.png';
import DropButton from './DropButton'

interface props {
  setOpen: any;
  email: string | undefined;
}

function Header({email, setOpen}: props){
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
            <div className="cart4">
              <a href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="M11 9V6H8V4h3V1h2v3h3v2h-3v3ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.125 0-1.725-.988-.6-.987-.025-1.962L6.6 11.6 3 4H1V2h3.275l4.25 9h7.025l3.875-7 1.75.95-3.875 7q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h12v2Z" />
                </svg>
              </a>
            </div>
            {/* 비로그인 */}
            <div className={email ? 'disable' : 'login_btn4'}>
              <a onClick={() => setOpen(true)}>로그인</a>
            </div>
            <div className={email ? 'disable' : 'sign_up4'}>
              <a href="/signup">회원가입</a>
            </div>
            {/* 로그인 상태 */}
            <div className={email ? 'login_btn4' : 'disable'} >
              <a href="">{email} /logout</a>
            </div>
            <div className={email ? 'sing_up4 ' : 'disable'}>
              <a href="">{email} / mypage</a>
            </div>
          </div>
        </div>
      </header>
    );
}
export default Header;
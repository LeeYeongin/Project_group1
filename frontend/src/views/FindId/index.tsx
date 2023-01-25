import React from 'react'
import './style.css'

export default function FindId() {
  return (
    <div>
        <div className="main-container33">
            <div className="container33">
                <div className="head33">
                    <div className="find-id33">아이디 찾기</div>
                    <div className="find-id233">해삐에서 가치를 높이세요!</div>
                </div>
                <div className="main33">
                    <div className="main233">
                        <div className="name33">이름</div>
                        <div className="input-bar33">
                            <input className="input33" type="text"/>
                        </div>
                    </div>
                    <div className="main333">
                        <div className="telnum33">휴대폰번호</div>
                        <div className="input-bar33">
                            <input className="input33" type="text"/>
                        </div>
                    </div>
                    <div className="main433">
                        <div className="success33">
                            <a href="/indexModal">
                            <div className='findID-btn'>아이디 찾기</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

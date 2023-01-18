import React from 'react'
import './style.css'

export default function FindId() {
  return (
    <div>
        <div className="main-container">
            <div className="container">
                <div className="head">
                    <div className="find-id">아이디 찾기</div>
                    <div className="find-id2">해삐에서 가치를 높이세요!</div>
                </div>
                <div className="main">
                    <div className="main2">
                        <div className="name">이름</div>
                        <div className="input-bar">
                            <input className="input" type="text"/>
                        </div>
                    </div>
                    <div className="main3">
                        <div className="telnum">휴대폰번호</div>
                        <div className="input-bar">
                            <input className="input" type="text"/>
                        </div>
                    </div>
                    <div className="main4">
                        <div className="success">
                            <div>완료</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import Totoro from '../../asset/img/totoro.png';
import './style.css';

export default function Cart() {

  return (
    <>
      <header>
        <div className="h_nav_bar">
          <a href="#" className="logohappy">
            해-삐<small className="shappy">Happy</small>
          </a>
          <img src="./images/luffy.png" className="luffy" />
          <div className="head_lecture_category">
            <a href="#">강의목록</a>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="nav_bar_right">
            <div className="cart">
              <a href="#">
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </a>
            </div>
            <div className="login_btn">
              <a href="#">로그인</a>
            </div>
            <div className="sign_up">
              <a href="#">회원가입</a>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="cart-section">
          <h1 className="cart-name">수강바구니</h1>
          <div className="cart-container">
            <div className="cart-control">
              <div className="select-control">
                <input type="checkbox" />
                <span>전체선택</span>
              </div>
              <button className="cancel-control">선택삭제 X</button>
            </div>
            <div className="cart-list">
              <input type="checkbox" className="course-select" />
              <div className="cart-course-img">
                <img src="img/github.png" alt="course-img" />
              </div>
              <div className="cart-course-info">
                <h3 className="course-title">
                  <a href="#">깃허브-깃허브 사용법 배우기</a>
                </h3>
                <div>
                  <span>김영한</span>
                  <span>|</span>
                  <span>무제한 수강</span>
                </div>
              </div>
              <div className="close">
                <button className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="payment">77,000원</div>
            </div>
            <div className="cart-list">
              <input type="checkbox" className="course-select" />
              <div className="cart-course-img">
                <img src="img/github.png" alt="course-img" />
              </div>
              <div className="cart-course-info">
                <h3 className="course-title">
                  <a href="#">깃허브-깃허브 사용법 배우기</a>
                </h3>
                <div>
                  <span>김영한</span>
                  <span>|</span>
                  <span>무제한 수강</span>
                </div>
              </div>
              <div className="close">
                <button className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="payment">77,000원</div>
            </div>
          </div>
        </div>
        <div className="side-container">
          <div className="buyer-info">
            <div className="buyer-info-header">
              <div>
                <span>구매자정보</span>
                <i className="fa-regular fa-circle-question"></i>
              </div>
              <a className="modify-btn" href="#">
                수정
              </a>
            </div>
            <div className="buyer-name">
              <dt>이름</dt>
              <dd>이영인</dd>
            </div>
            <div className="buyer-email">
              <dt>이메일</dt>
              <dd>abc@naver.com</dd>
            </div>
            <div className="buyer-telphone">
              <dt>전화번호</dt>
              <dd>010-1234-5678</dd>
            </div>
          </div>
          <div className="payment-container">
            <div className="coupon-using">
              <div className="coupon-header">
                <div>
                  <span>쿠폰</span>
                  <i className="fa-regular fa-circle-question"></i>
                </div>
                <div>
                  <span>사용가능</span>
                  <span>0</span>
                </div>
              </div>
              <div className="coupon-select">
                <input
                  type="text"
                  value="0"
                  className="coupon-input"
                  disabled
                />
                <button className="coupon-select-btn">쿠폰선택</button>
              </div>
            </div>
            <div className="point-using">
              <div className="point-header">
                <div>
                  <span>포인트</span>
                  <i className="fa-regular fa-circle-question"></i>
                </div>
                <div>
                  <span>보유</span>
                  <span>0</span>
                </div>
              </div>
              <div className="point-select">
                <input
                  type="text"
                  placeholder="1000포인트 이상 사용가능"
                  className="point-input"
                />
                <button className="point-select-btn">전액사용</button>
              </div>
            </div>
            <div className="price-regular">
              <span>선택상품 금액</span>
              <span>176000원</span>
            </div>
            <div className="price-discount">
              <div>
                <span>할인금액</span>
                <button className="show-detail">
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <span>0원</span>
            </div>
            <div className="price-pay">
              <span>총 결제금액</span>
              <span>176000원</span>
            </div>
            <button className="payment-btn">결제하기</button>
          </div>
        </div>
      </div>
      <div className="recommend-container">
        <h1 className="recommend-list-title">
          나와 비슷한 사람들이 수강한 강의
        </h1>
        <div className="recommend-list">
          <div className="recommend-cousrse-card-wrapper">
            <div className="recommend-course-card">
              <div className="card-img">
                <img src="img/강아지.jpg" alt="" className="card-img img" />
              </div>
              <div className="recommend-card-content">
                <div className="course-title">나도코딩의 자바 기본편</div>
                <div className="course-instructor">나도 코딩</div>
                <span className="course-price">50,050원</span>
              </div>
            </div>
            <div className="add-cart">
              <div className="add-cart-btn-container">
                <div className="add-cart-course-info">
                  <a href="https://www.naver.com/">나도코딩의 자바 기본편</a>
                  <br />
                  <span>나도 코딩</span>
                </div>
                <button type="button" className="cart-btn" onClick={() => {}}>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="recommend-cousrse-card-wrapper">
            <div className="recommend-course-card">
              <div className="card-img">
                <img src={Totoro} alt="" className="card-img img" />
              </div>
              <div className="recommend-card-content">
                <div className="course-title">나도코딩의 자바 기본편</div>
                <div className="course-instructor">나도 코딩</div>
                <span className="course-price">50,050원</span>
              </div>
            </div>
            <div className="add-cart">
              <div className="add-cart-btn-container">
                <div className="add-cart-course-info">
                  <a href="https://www.naver.com/">나도코딩의 자바 기본편</a>
                  <br />
                  <span>나도 코딩</span>
                </div>
                <button type="button" className="cart-btn" onClick={() => {}}>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="recommend-cousrse-card-wrapper">
            <div className="recommend-course-card">
              <div className="card-img">
                <img src="img/단풍.jpg" alt="" className="card-img img" />
              </div>
              <div className="recommend-card-content">
                <div className="course-title">나도코딩의 자바 기본편</div>
                <div className="course-instructor">나도 코딩</div>
                <span className="course-price">50,050원</span>
              </div>
            </div>
            <div className="add-cart">
              <div className="add-cart-btn-container">
                <div className="add-cart-course-info">
                  <a href="https://www.naver.com/">나도코딩의 자바 기본편</a>
                  <br />
                  <span>나도 코딩</span>
                </div>
                <button type="button" className="cart-btn" onClick={() => {}}>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

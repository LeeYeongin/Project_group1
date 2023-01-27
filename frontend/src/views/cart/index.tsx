import React, { useState } from 'react'
import Totoro from '../../asset/img/totoro.png';
import './style.css';

export default function Cart() {

  return (
    <>
      <div className="container2">
        <div className="cart-section2">
          <h1 className="cart-name2">수강바구니</h1>
          <div className="cart-container2">
            <div className="cart-control2">
              <div className="select-control2">
                <input type="checkbox" />
                <span>전체선택</span>
              </div>
              <button className="cancel-control2">선택삭제 X</button>
            </div>
            <div className="cart-list2">
              <input type="checkbox" className="course-select2" />
              <div className="cart-course-img2">
                <img src="img/github.png" alt="course-img" />
              </div>
              <div className="cart-course-info2">
                <h3 className="course-title2">
                  <a href="#">깃허브-깃허브 사용법 배우기</a>
                </h3>
                <div>
                  <span>김영한</span>
                  <span>|</span>
                  <span>무제한 수강</span>
                </div>
              </div>
              <div className="close2">
                <button className="close-btn2">
                  <i className="fa-solid2 fa-xmark2"></i>
                </button>
              </div>
              <div className="payment2">77,000원</div>
            </div>
            <div className="cart-list2">
              <input type="checkbox" className="course-select2" />
              <div className="cart-course-img2">
                <img src="img/github.png" alt="course-img" />
              </div>
              <div className="cart-course-info2">
                <h3 className="course-title2">
                  <a href="#">깃허브-깃허브 사용법 배우기</a>
                </h3>
                <div>
                  <span>김영한</span>
                  <span>|</span>
                  <span>무제한 수강</span>
                </div>
              </div>
              <div className="close2">
                <button className="close-btn2">
                  <i className="fa-solid2 fa-xmark2"></i>
                </button>
              </div>
              <div className="payment2">77,000원</div>
            </div>
          </div>
        </div>
        <div className="side-container2">
          <div className="buyer-info2">
            <div className="buyer-info-header2">
              <div>
                <span>구매자정보</span>
                <i className="fa-regular2 fa-circle-question2"></i>
              </div>
              <a className="modify-btn2" href="#">
                수정
              </a>
            </div>
            <div className="buyer-name2">
              <dt>이름</dt>
              <dd>이영인</dd>
            </div>
            <div className="buyer-email2">
              <dt>이메일</dt>
              <dd>abc@naver.com</dd>
            </div>
            <div className="buyer-telphone2">
              <dt>전화번호</dt>
              <dd>010-1234-5678</dd>
            </div>
          </div>
          <div className="payment-container2">
            <div className="coupon-using2">
              <div className="coupon-header2">
                <div>
                  <span>쿠폰</span>
                  <i className="fa-regular2 fa-circle-question2"></i>
                </div>
                <div>
                  <span>사용가능</span>
                  <span>0</span>
                </div>
              </div>
              <div className="coupon-select2">
                <input
                  type="text"
                  value="0"
                  className="coupon-input2"
                  disabled
                />
                <button className="coupon-select-btn2">쿠폰선택</button>
              </div>
            </div>
            <div className="point-using2">
              <div className="point-header2">
                <div>
                  <span>포인트</span>
                  <i className="fa-regular2 fa-circle-question2"></i>
                </div>
                <div>
                  <span>보유</span>
                  <span>0</span>
                </div>
              </div>
              <div className="point-select2">
                <input
                  type="text"
                  placeholder="1000포인트 이상 사용가능"
                  className="point-input2"
                />
                <button className="point-select-btn2">전액사용</button>
              </div>
            </div>
            <div className="price-regular2">
              <span>선택상품 금액</span>
              <span>176000원</span>
            </div>
            <div className="price-discount2">
              <div>
                <span>할인금액</span>
                <button className="show-detail2">
                  <i className="fa-solid2 fa-angle-down2"></i>
                </button>
              </div>
              <span>0원</span>
            </div>
            <div className="price-pay2">
              <span>총 결제금액</span>
              <span>176000원</span>
            </div>
            <button className="payment-btn2">결제하기</button>
          </div>
        </div>
      </div>
      <div className="recommend-container2">
        <h1 className="recommend-list-title2">
          나와 비슷한 사람들이 수강한 강의
        </h1>
        <div className="recommend-list2">
          <div className="recommend-cousrse-card-wrapper2">
            <div className="recommend-course-card2">
              <div className="card-img2">
                <img src="img/강아지.jpg" alt="" className="card-img img2" />
              </div>
              <div className="recommend-card-content2">
                <div className="course-title2">나도코딩의 자바 기본편</div>
                <div className="course-instructor2">나도 코딩</div>
                <span className="course-price2">50,050원</span>
              </div>
            </div>
            <div className="add-cart2">
              <div className="add-cart-btn-container2">
                <div className="add-cart-course-info2">
                  <a href="https://www.naver.com/">나도코딩의 자바 기본편</a>
                  <br />
                  <span>나도 코딩</span>
                </div>
                <button type="button" className="cart-btn2" onClick={() => {}}>
                  <i className="fa-solid2 fa-cart-plus2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="recommend-cousrse-card-wrapper2">
            <div className="recommend-course-card2">
              <div className="card-img2">
                <img src={Totoro} alt="" className="card-img img2" />
              </div>
              <div className="recommend-card-content2">
                <div className="course-title2">나도코딩의 자바 기본편</div>
                <div className="course-instructor2">나도 코딩</div>
                <span className="course-price2">50,050원</span>
              </div>
            </div>
            <div className="add-cart2">
              <div className="add-cart-btn-container2">
                <div className="add-cart-course-info2">
                  <a href="https://www.naver.com/">나도코딩의 자바 기본편</a>
                  <br />
                  <span>나도 코딩</span>
                </div>
                <button type="button" className="cart-btn2" onClick={() => {}}>
                  <i className="fa-solid2 fa-cart-plus2"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="recommend-cousrse-card-wrapper2">
            <div className="recommend-course-card2">
              <div className="card-img2">
                <img src="img/단풍.jpg" alt="" className="card-img img2" />
              </div>
              <div className="recommend-card-content2">
                <div className="course-title2">나도코딩의 자바 기본편</div>
                <div className="course-instructor2">나도 코딩</div>
                <span className="course-price2">50,050원</span>
              </div>
            </div>
            <div className="add-cart2">
              <div className="add-cart-btn-container2">
                <div className="add-cart-course-info2">
                  <a href="https://www.naver.com/">나도코딩의 자바 기본편</a>
                  <br />
                  <span>나도 코딩</span>
                </div>
                <button type="button" className="cart-btn2" onClick={() => {}}>
                  <i className="fa-solid2 fa-cart-plus2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

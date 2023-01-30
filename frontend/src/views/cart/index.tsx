import axios from 'axios';
import React, { useState } from 'react'
import Totoro from '../../asset/img/totoro.png';
import './style.css';

export default function Cart() {
  const [requestResult, setRequestResult] = useState<string>('')
  const [itemList, setItemList] = useState<any[]>([]);
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telNum, setTelNum] = useState<string>('')
  const [checkValue, setCheckValue] = useState<number[]>([]);

  const cartCheckHandler = (cartId: any) => {
    let tmp = checkValue;
    if (tmp.includes(cartId))
      tmp = checkValue.filter((item) => item !== cartId);
    else 
      tmp.push(cartId);
    setCheckValue(tmp);
  }

  const cartHandler = () => {
    const getdata = {
      idUser: "aaa"
    };

    
    
    axios.post("http://localhost:4040/cart/", getdata)
    .then((Response) => {
      const tmp = [];
      setRequestResult('Success!!');

      axios.post("http://localhost:4040/cart/user", getdata)
      .then((Response) => {
          setName(Response.data.data.name)
          setEmail(Response.data.data.email)
          setTelNum(Response.data.data.telNum)
      })
      .catch((error) => {
        setRequestResult('Failed!!');
      })

      // console.log(Response.data.data.length);
      // console.log(Response.data.data[0].img);
      // console.log(Response.data.data.className);
      // console.log(Response.data.data.price);
      // console.log(Response.data.data.instructor);

      for (let i = 0; i < Response.data.data.length; i++) {
        tmp.push({
          img: Response.data.data[i].img,
          className: Response.data.data[i].className,
          price: Response.data.data[i].price + "원",
          instructor: Response.data.data[i].instructor
        })
      }

      setItemList(tmp);
    })
    .catch((error) => {
      setRequestResult('Failed!!');
    })
  }
  
  return (
    <>
      <div className="container-wrapper2">
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

              {itemList.map((item) => (
                <>
                  <div className="cart-list2">
                    <input type="checkbox" value={item.idCart} onChange={(e) => cartCheckHandler(e.currentTarget.value)} className="course-select2" />
                    <div className="cart-course-img2">
                      <img src={item.img} alt="course-img" />
                    </div>
                    <div className="cart-course-info2">
                      <h3 className="course-title2">
                        <a href="#">{item.className}</a>
                      </h3>
                      <div>
                        <span>{item.instructor}</span>
                      </div>
                    </div>
                    <div className="close2">
                      <button className="close-btn2">
                        <i className="fa-solid2 fa-xmark2"></i>
                      </button>
                    </div>
                    <div className="payment2">
                      {item.price}
                    </div>
                  </div>
                </>
              ))}
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
                <dd>{name}</dd>
              </div>
              <div className="buyer-email2">
                <dt>이메일</dt>
                <dd>{email}</dd>
              </div>
              <div className="buyer-telphone2">
                <dt>전화번호</dt>
                <dd>{telNum}</dd>
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
                {/* <div>{requestResult}</div> */}
              </div>
              <button className="payment-btn2" onClick={() => cartHandler()}>
                결제하기
              </button>
            </div>
          </div>
        </div>
        {/* <div className="recommend-container2">
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
                  <button
                    type="button"
                    className="cart-btn2"
                    onClick={() => {}}
                  >
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
                  <button
                    type="button"
                    className="cart-btn2"
                    onClick={() => {}}
                  >
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
                  <button
                    type="button"
                    className="cart-btn2"
                    onClick={() => {}}
                  >
                    <i className="fa-solid2 fa-cart-plus2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
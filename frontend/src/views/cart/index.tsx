import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import Totoro from '../../asset/img/totoro.png';
import CartList from './cartlist';
import NoCartList from './nocartlist';
import './style.css';

export default function Cart() {
  const [requestResult, setRequestResult] = useState<string>('')
  const [itemList, setItemList] = useState<any[]>([]);
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telNum, setTelNum] = useState<string>('')
  const [checkValue, setCheckValue] = useState<number[]>([]);
  const [priceSum, setPriceSum] = useState<number>(0);
  const [showList, setShowList] = useState<boolean>(false);
  const [isAllCheck, setIsAllCheck] = useState<boolean>(true);

  const deleteHandler = () => {
    axios.post("http://localhost:4040/cart/delete", checkValue)
    .then((Response) => {
      setRequestResult('Success!!');
      setCheckValue([])
    })
    .catch((error) => {
      setRequestResult('Failed!!');
    })

    cartHandler();
    showListHandler();
  }

  const cartHandler = () => {
    const getdata = {
      idUser: "aaa"
    };
    
    axios.post("http://localhost:4040/cart/", getdata)
    .then((Response) => {
      const tmp = [];
      // let sum = 0;
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

      if(Response.data.data.length === 0){
        setShowList(false);
      }else{
        console.log(Response.data);
        for (let i = 0; i < Response.data.data.length; i++) {
          tmp.push({
            idCart: Response.data.data[i].idCart,
            img: Response.data.data[i].classInfo.img,
            className: Response.data.data[i].classInfo.className,
            price: Response.data.data[i].classInfo.price,
            instructor: Response.data.data[i].classInfo.instructor,
            isCheck: false
          })
        }

        setItemList(tmp);
        setShowList(true);
      }
      console.log(requestResult);
    })
    .catch((error) => {
      setRequestResult('Failed!!');
      console.log(requestResult);
    })
  }

  const showListHandler = () => {
    if(!showList){
      return <NoCartList/>
    }else{
      return <CartList 
      itemList={itemList} checkValue={checkValue} setCheckValue={setCheckValue} setPriceSum={setPriceSum} priceSum={priceSum}/>
    }
  }

  useEffect(() => {
    cartHandler()
  },[])

  
  
  return (
    <>
      <div className="container-wrapper2">
        <div className="container2">
          <div className="cart-section2">
            <h1 className="cart-name2">수강바구니</h1>
            <div className="cart-container2">
              <>
              <div className="cart-control2">
                <div className="select-control2">
                  <input type="checkbox" checked={isAllCheck} onClick={()=>setIsAllCheck(isAllCheck?false:true)}/>
                  <span> 전체선택</span>
                </div>
                <button className="cancel-control2" onClick={() => deleteHandler()}>선택삭제 X</button>
              </div>
              {showListHandler()}
              </>
            </div>
          </div>
          <div className="side-container2">
            <div className="buyer-info2">
              <div className="buyer-info-header2">
                <div>
                  <span>구매자정보</span>
                  <i className="fa-regular2 fa-circle-question2"></i>
                </div>
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
              {/* <div className="coupon-using2">
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
              </div> */}
              <div className="price-regular2">
                <span>선택상품 금액</span>
                <span>{priceSum}원</span>
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
                <span>{priceSum}원</span>
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
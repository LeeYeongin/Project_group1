import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Totoro from '../../asset/img/totoro.png';
import { useUserStore } from '../../stores';
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

  const [cookies, setCookies] = useCookies();
  const {user} = useUserStore();

  useEffect(() => {
    console.log(cookies);
    console.log(user);
  }, [cookies]);

  const cartHandler = () => {
    const getdata = {
      idUser: " "
    };

    console.log(cookies)
    console.log('user:' + user)

    const requestOption = {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    }
    
    axios
    .get("http://localhost:4040/api/cart/", requestOption)
    .then((Response) => {
      const tmp = [];
      setRequestResult('Success!!');

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

    axios
    .get("http://localhost:4040/api/cart/user", requestOption)
      .then((Response) => {
          setName(Response.data.data.name)
          setEmail(Response.data.data.email)
          setTelNum(Response.data.data.telNum)
      })
      .catch((error) => {
        setRequestResult('Failed!!');
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
    <div className="container-wrapper2">
      <div className="container2">
        <div className="cart-section2">
          <h1 className="cart-name2">수강바구니</h1>
          <div className="cart-container2">
            {showListHandler()}
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
            </div>
            <button className="payment-btn2" onClick={() => cartHandler()}>
              결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Totoro from '../../asset/img/totoro.png';
import { useUserStore } from '../../stores';
import CartList from './cartlist';
import NoCartList from './nocartlist';
import './style.css';

export default function Cart() {
  const [requestResult, setRequestResult] = useState<string>('');
  const [itemList, setItemList] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telNum, setTelNum] = useState<string>('');
  const [checkValue, setCheckValue] = useState<number[]>([]);
  const [priceSum, setPriceSum] = useState<number>(0);
  const [showList, setShowList] = useState<boolean>(false);
  const [cookies, setCookies] = useCookies();
  const navigator = useNavigate();

  const requestOption = {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  };

  const gotocart = () => {
    window.location.href = `http://localhost:3000/cart`;
  };

  const cartHandler = () => {
    axios
      .get('http://localhost:4040/api/cart/', requestOption)
      .then((Response) => {
        const tmp = [];
        setRequestResult('Success!!');

        if (Response.data.data.length === 0) {
          setShowList(false);
        } else {
          console.log(Response.data);
          for (let i = 0; i < Response.data.data.length; i++) {
            tmp.push({
              idCart: Response.data.data[i].idCart,
              img: Response.data.data[i].classInfo.img,
              className: Response.data.data[i].classInfo.className,
              price: Response.data.data[i].classInfo.price,
              instructor: Response.data.data[i].classInfo.instructor,
              isCheck: false,
              idClass: Response.data.data[i].classInfo.idClass,
            });

            console.log(tmp);
          }

          setItemList(tmp);
          setShowList(true);
        }
        console.log(requestResult);
      })
      .catch((error) => {
        setRequestResult('Failed!!');
        console.log(requestResult);
      });

    axios
      .get('http://localhost:4040/api/cart/user', requestOption)
      .then((Response) => {
        setName(Response.data.data.name);
        setEmail(Response.data.data.email);
        setTelNum(Response.data.data.telNum);
      })
      .catch((error) => {
        setRequestResult('Failed!!');
      });
  };

  const showListHandler = () => {
    if (!showList) {
      return <NoCartList />;
    } else {
      return (
        <CartList
          itemList={itemList}
          checkValue={checkValue}
          setCheckValue={setCheckValue}
          setPriceSum={setPriceSum}
          priceSum={priceSum}
        />
      );
    }
  };

  const paymentHandler = () => {
    if (checkValue.length === 0) {
      alert('????????? ????????? ????????????.');
      return;
    }
    console.log(checkValue);
    const data = {
      idCart: checkValue,
    };

    axios
      .post('http://localhost:4040/api/cart/payment', data, requestOption)
      .then((response) => {
        alert('????????? ?????????????????????.');
        axios
          .post(
            'http://localhost:4040/api/cart/delete',
            checkValue,
            requestOption
          )
          .then((Response) => {
            setRequestResult('Success!!');
            setCheckValue([]);
            gotocart();
          })
          .catch((error) => {
            setRequestResult('Failed!!');
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    cartHandler();
  }, []);

  return (
    <div className="container-wrapper2">
      <div className="container2">
        <div className="cart-section2">
          <h1 className="cart-name2">???????????????</h1>
          <div className="cart-container2">{showListHandler()}</div>
        </div>
        <div className="side-container2">
          <div className="buyer-info2">
            <div className="buyer-info-header2">
              <div>
                <span>???????????????</span>
                <i className="fa-regular2 fa-circle-question2"></i>
              </div>
            </div>
            <div className="buyer-name2">
              <dt>??????</dt>
              <dd>{name}</dd>
            </div>
            <div className="buyer-email2">
              <dt>?????????</dt>
              <dd>{email}</dd>
            </div>
            <div className="buyer-telphone2">
              <dt>????????????</dt>
              <dd>{telNum}</dd>
            </div>
          </div>
          <div className="payment-container2">
            <div className="price-regular2">
              <span>???????????? ??????</span>
              <span>{priceSum}???</span>
            </div>
            <div className="price-discount2">
              <div>
                <span>????????????</span>
                <button className="show-detail2">
                  <i className="fa-solid2 fa-angle-down2"></i>
                </button>
              </div>
              <span>0???</span>
            </div>
            <div className="price-pay2">
              <span>??? ????????????</span>
              <span>{priceSum}???</span>
            </div>
            <button className="payment-btn2" onClick={() => paymentHandler()}>
              ????????????
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

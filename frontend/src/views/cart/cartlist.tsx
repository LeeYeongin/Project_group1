import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface props {
    itemList: any[];
    checkValue: number[];
    setCheckValue: any;
    setPriceSum: any;
    priceSum: number;
}

export default function CartList({itemList, checkValue, setCheckValue, setPriceSum, priceSum}: props) {
  const [check, setCheck] = useState<boolean>(false);
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false);
  const [requestResult, setRequestResult] = useState<string>('')

  const plusPriceFucntion = (price: number) => {
    let sum = priceSum; 
    sum = sum + price;
    setPriceSum(sum)
  }

  const minusPriceFucntion = (price: number) => {
    let sum = priceSum;
    sum = sum - price;
    setPriceSum(sum)
  }

  // 전체 선택
  const handleCartCheckAllHandler = (checked:boolean) => {
    let num:number[] = [];
    const idArray: any[] = [];
    let num2 = 0;

    itemList.forEach((el:any) => idArray.push(el.idCart));
    itemList.forEach((el:any) => num.push(el.price));

    num.map((number) => {
      num2 += number;
    })

    console.log(num2);

    if(checked){
      setCheckValue(idArray);
      plusPriceFucntion(num2);
    }else{
      setCheckValue([]);
      setPriceSum(0);
    }
  }

  const cartCheckHandler = (data: any) => {
    let tmp = checkValue;
    const obj = JSON.parse(data);
    let id = obj.idCart;
    if (tmp.includes(id)){
      tmp = checkValue.filter((item) => item !== id);
      minusPriceFucntion(parseInt(obj.price))
    }
    else{
      tmp.push(id);
      plusPriceFucntion(parseInt(obj.price))
    }
    setCheckValue(tmp);
  }

  const deleteHandler = () => {
    axios.post("http://localhost:4040/api/cart/delete", checkValue)
    .then((Response) => {
      setRequestResult('Success!!');
      setCheckValue([])
    })
    .catch((error) => {
      setRequestResult('Failed!!');
    })
    console.log(requestResult);
  }

  return (
    <>
      <div className="cart-control2">
        <div className="select-control2">
          <input type="checkbox"
          checked={checkValue.length === itemList.length ? true : false}
          onChange={(e)=>handleCartCheckAllHandler(e.target.checked)}/>
          <span> 전체선택</span>
        </div>
        <button className="cancel-control2" onClick={() => deleteHandler()}>선택삭제 X</button>
      </div>
      {itemList.map((item) => (
        <div className="cart-list2">
          <input type="checkbox" value={JSON.stringify(item)}
          onChange={(e) => {cartCheckHandler(e.currentTarget.value)}}
          checked={checkValue.includes(item.idCart) ? true : false} 
          className="course-select2"/>
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
            {item.price}원
          </div>
        </div>
      ))}
    </>
  )
}
import React, { useEffect, useState } from 'react'

interface props {
    itemList: any[];
    checkValue: number[];
    setCheckValue: any;
    setPriceSum: any;
    priceSum: number;
}

export default function CartList({itemList, checkValue, setCheckValue, setPriceSum, priceSum}: props) {
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

    const cartCheckHandler = (data: any) => {
        let tmp = checkValue;
        const obj = JSON.parse(data);
        let id = obj.idCart
        if (tmp.includes(id)){
          tmp = checkValue.filter((item) => item !== id);
          minusPriceFucntion(parseInt(obj.price))
        }
        else{
          tmp.push(id);
          plusPriceFucntion(parseInt(obj.price))
        } 
        setCheckValue(tmp);
        console.log(checkValue);
      }

  return (
    <>
        {itemList.map((item) => (
                <>
                <div className="cart-list2">
                  <input type="checkbox" value={JSON.stringify(item)} onChange={(e) => {cartCheckHandler(e.currentTarget.value)}} className="course-select2" />
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
              </>
              ))}
    </>

  )
}
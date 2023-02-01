import React, { useState } from 'react'

interface props {
    itemList: any[];
    checkValue: number[];
    setCheckValue: any;
}
export default function CartList({itemList, checkValue, setCheckValue}: props) {
    const cartCheckHandler = (cartId: any) => {
        let tmp = checkValue;
        if (tmp.includes(cartId))
          tmp = checkValue.filter((item) => item !== cartId);
        else 
          tmp.push(cartId);
        
        setCheckValue(tmp);
        console.log(checkValue);
    
      }

  return (
    <>
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
    </>

  )
}

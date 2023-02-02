import React from 'react'
import { useEffect, useState } from 'react';
import './style.css';
import * as list from './fucntion';

import DB_IMAGE from '../../asset/image_list/DB.png';
import STAR from '../../asset/image_list/star.png';
import axios from 'axios';

const [requestResult, setRequestResult] = useState<string>('')
const [itemList, setItemList] = useState<any[]>([]);
const [grade, setgrade] = useState<number>(0);

export const showStar = (grade: number) =>{
      
  for(let i = 0; i < grade; i++){
    ;
  }
};

export const allCategoryHandler = () => {
  setItemList([]);
  setgrade(0);

  axios.get("http://localhost:4040/list/all")
  .then((Response) => {
    const tmp = [];
    setRequestResult('success!');

    for(let i = 0; i < Response.data.data.length; i++){
      tmp.push({
        img: Response.data.data[i].img,
        className: Response.data.data[i].className,
        instructor: Response.data.data[i].instructor,
        price: Response.data.data[i].price,
        discountRate: Response.data.data[i].discountRate,
        studentCount: Response.data.data[i].studentCount,
        grade: Response.data.data[i].grade
      })
    }
    setItemList(tmp);

    
  })
  .catch((error) =>{
    setRequestResult('Failed!');
  })
}

export const categoryHandler = (arg: string) => {
  setItemList([]);
  setgrade(0);

  const getdata = {
    category: arg
  };

  

  axios.post("http://localhost:4040/list/", getdata)
  .then((Response) => {
    const tmp = [];
    setRequestResult('success!');

    for(let i = 0; i < Response.data.data.length; i++){
      tmp.push({
        img: Response.data.data[i].img,
        className: Response.data.data[i].className,
        instructor: Response.data.data[i].instructor,
        price: Response.data.data[i].price,
        discountRate: Response.data.data[i].discountRate,
        studentCount: Response.data.data[i].studentCount,
        grade: Response.data.data[i].grade
      })
    }
    setItemList(tmp);

    
  })
  .catch((error) =>{
    setRequestResult('Failed!');
  })
}




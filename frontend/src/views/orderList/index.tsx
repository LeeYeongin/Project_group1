import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import './style.css';


const url = `http://localhost:4040/orderlist/aaa`;
const classUrl = `http://localhost:4040/classlist`;

interface OrderList{
    orderNumber: string;
    orderDate: any;
    status: string;
    idClass: number[];
    price:number;
}

interface ClassInfo {
    idClass: number;
    className: string;
}

function BasicExample() {

    const [orders, setOrders] = useState<OrderList[]>([]);
    const [classInfo, setClassInfo] = useState<ClassInfo[]>([]);

    useEffect(() => {
    async function fetchData(){
        try{
            const response = await axios.get(url);
            console.log(response.data);
            console.log(response.data.data.orderDtlList.length);
            const orderInfo = []
            const idClassTmp = []
            let sum = 0
            for(let i = 0; i < response.data.data.orderDtlList.length; i++){
                idClassTmp.push(response.data.data.orderDtlList[i].idClass)
                sum = sum + response.data.data.orderDtlList[i].price
            }
            
            orderInfo.push({
                orderNumber: response.data.data.orderNumber,
                orderDate: response.data.data.orderDate,
                status: response.data.data.status,
                idClass: idClassTmp,
                price: sum
            })

            setOrders(orderInfo)
        }catch(error){
            console.error(error);
        }
        
    }

    fetchData();
    }, []);
    
    return (
        <div className="orderList_container1">
        <div className="orderList_title1">
            <h3>내 구매 내역</h3>
        </div>
        <Table striped bordered hover className="test">
            <thead className="dashboard-wrapper1">
                <tr className="orderList_dashboard1">
                    <th className="subtitle-title">주문번호</th>
                    <th className="subtitle-title">주문날짜</th>
                    <th className="subtitle-title">상태</th>
                    <th className="subtitle-title">주문내역</th>
                    <th className="subtitle-title">금액</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                <tr key={order.orderNumber}>
                    <td className="subtitle-data">
                        {order.orderNumber}
                    </td>
                    <td className="subtitle-data">
                        {order.orderDate}
                    </td>
                    <td className="subtitle-data">
                        {order.status}
                    </td>
                    <td className="subtitle-data order-item">
                        {order.idClass.map((item) => (
                            <React.Fragment>
                                <a href="#">
                                    {item}
                                </a>
                                <br />
                            </React.Fragment>
                        ))}
                    </td>
                    <td className="subtitle-data">
                    {order.price}
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        </div>
    );
}


export default BasicExample;

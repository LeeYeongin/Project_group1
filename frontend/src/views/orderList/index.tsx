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
    classInfo: any[];
    price:number;
}

interface ClassInfo {
    idClass: number;
    className: string;
}

//상세페이지 이동
const gotopage = (idClass:number) => {
    // axios.post(`http://localhost:4040/main5/${idClass}`);
    window.location.href = `http://localhost:3000/main5/${idClass}`;
}

function BasicExample() {

    const [orders, setOrders] = useState<OrderList[]>([]);

    useEffect(() => {
    async function fetchData(){
        try{
            const response = await axios.get(url);
            console.log(response.data);
            const orderInfo = []
            
            for(let i = 0; i < response.data.data.length; i++){
                orderInfo.push({
                    orderNumber: response.data.data[i].orderNumber,
                    orderDate: response.data.data[i].orderDate,
                    status: response.data.data[i].status,
                    classInfo: response.data.data[i].className,
                    price: response.data.data[i].price
                })
            }
            setOrders(orderInfo)
            console.log(orders)
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
        <Table striped bordered className="test">
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
                        {order.classInfo.map((item) => (
                            <React.Fragment>
                                <a onClick={() => gotopage(item.idClass)} className="name-link">
                                    {item.className}
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

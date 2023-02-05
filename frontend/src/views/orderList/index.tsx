import './style.css';

export default function orderList(){
    return(

    <div className="orderList_container1">
        <div className="orderList_title1">
            <h3>내 구매 내역</h3>
        </div>
        <div className="dashboard-wrapper1">
            <div className="orderList_dashboard1">
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        주문번호
                    </div>
                    <div className="subtitle-data" style={{paddingTop:'35px'}}>
                        1441490
                    </div>
                </div>
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        주문날짜
                    </div>
                    <div className="subtitle-data"  style={{paddingTop:'35px'}}>
                        2022-01-14
                    </div>
                </div>
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        상태
                    </div>
                    <div className="subtitle-data"  style={{paddingTop:'35px'}}>
                        결제완료
                    </div>
                </div>
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        주문명
                    </div>
                    <div className="subtitle-data" style={{paddingTop:'35px'}}>
                        <a href="#">실무로 배우는(Excel)2019</a> 
                    </div>
                </div>
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        금액
                    </div>
                    <div className="subtitle-data" id="count-data">
                            <p style={{float:'right', margin:'0'}}> ￦5,517,600</p>
                        <br/> <p style={{float:'right', margin:'0'}}>-￦5,517,600</p> 
                    <br/> ─────────
                    <br/><p style={{float:'right'}}>￦0</p>
                    </div>
                </div>
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        영수증
                    </div>
                    <div className="subtitle-data">
                        
                    </div>
                </div>
                <div className="order-list-subtitle1">
                    <div className="subtitle-title">
                        거래명세서
                    </div>
                    <div className="subtitle-data"  style={{paddingTop:'35px'}}>
                        <a href="#">보기</a>
                    </div>
                </div>        
            </div>
        </div>
    </div>
    )
}
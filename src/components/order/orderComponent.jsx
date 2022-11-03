import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function OrderComponent(props) {
    const [qr, setqr] = useState(true);
    const [ordernumber, setordernumber] = useState(Math.floor(Math.random() * 800000) + 400000);

    let state = useSelector(state => {
        return state.coin
    })
    function handlerQr() {
        setqr(!qr)
    }
    return (
        <div className="order_page center">
            <div className="order_top">
                <h1>Заявка № {ordernumber}</h1>
            </div>
            <div className="order_bottom">
                <div className="card">
                    <div className="order_list">
                        <div className="order_list_item">
                            <p className="item_title">Отдаете</p>
                            <div className="list_item_info">
                                <img className="order_img_coin" src={state.activecoin.img} alt="" />
                                <p className="order_sum_tock">{state.coinamount}<span>{state.activecoin.shortname}</span></p>
                            </div>
                        </div>
                        <div className="order_list_item">
                            <p className="item_title">Получаете</p>
                            <div className="list_item_info">
                                <img className="order_img_fiat" src={state.activefiat.img} alt="" />
                                <p className="order_sum_fiat">{state.fiatamount}<span>{state.activefiat.name}</span></p>
                            </div>
                        </div>
                        <div className="order_list_item">
                            <p className="item_title">Email</p>
                            <div className="list_item_info">
                                <p className="email_order_cook">{state.email}</p>
                            </div>
                        </div>
                        <div className="order_list_item">
                            <p className="item_title">Cчет</p>
                            <div className="list_item_info">
                                <p className="card_addr_order">{state.cardnumber}</p>
                            </div>
                        </div>
                        <div className="order_list_item">
                            <p className="item_title">Курс</p>
                            <div className="list_item_info">
                                <p className="kurs_order_page">1 {state.activecoin.shortname} / {state.activecoin.rate}</p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>Показан курс на момент создания заявки</li>
                        <li>Курс корректируется в соответствии с биржей Binance</li>
                    </ul>
                </div>

                <div className="card qr_card">
                    <p className="order_bottom_titl">Оплата заявки</p>
                    <div className={qr ? "qr" : 'qr opacity'} onClick={handlerQr} ><img className="qr_img_th" src={state.activecoin.qr} alt="" /></div>
                    <div className="order_page_form">
                        <div className="textfield page_sum">
                            <p className="p_field">Cуммa</p>
                            <div className="in_page_order" onClick={() => { navigator.clipboard.writeText(state.coinamount) }
                            }>
                                <p className="field_sum f_sum_coin" id="ccc"
                                >{state.coinamount}</p>
                                <p className="field_sum_tocken">{state.activecoin.shortname}</p>
                            </div>
                        </div>
                        <div className="textfield page_addr">
                            <p className="p_field">На адрес</p>
                            <div className="in_page_order" onClick={() => { navigator.clipboard.writeText(state.activecoin.address) }}>
                                <p id="aaa" className="field_sum">{state.activecoin.address}</p>
                                <img className="qr_bat" src="/img/qr.png" alt="" onClick={handlerQr} />
                            </div>
                        </div>
                    </div>
                    <div className="order_info_bottom">
                        <img src="/img/info.svg" alt="" />
                        <ul>
                            <li>
                                Система фиксирует курс и пересчитывает сумму к получению <span>после 4 подтверждения транзакции</span> в сети.
                            </li>
                            <li>
                                В случае перевода не точной суммы (погрешность может составлять до 25%) - система сама определит точное количество полученных от Вас монет и пересчитает по актуальному курсу.
                            </li>
                            <li>
                                <b>
                                    После того, как мы получим оплату - страница автоматически обновится.
                                </b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderComponent
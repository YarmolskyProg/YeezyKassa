import React from "react";
function OrderInfo(props) {
    return (
        <div className="card order_info">
            <ul>
                <li>
                    Система фиксирует курс и инициирует выплату после 4 подтверждения транзакции в сети.
                </li>
                <li>
                    Если сумма к выплате превышает установленный лимит для одной операции - 40000.00 руб., в таком случае система отправит несколько платежей, кратных установленному лимиту.
                </li>
            </ul>
        </div>
    )
}
export default OrderInfo
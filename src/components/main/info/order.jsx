import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard, setEmail, toggleError } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
function Order(props) {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let state = useSelector(state => {
        return state.coin
    })
    function handlerChange(e) {
        let cardCode = e.target.value.replace(/[^\d]/g, '').substring(0, 16);
        cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';

        dispatch(setCard(cardCode))
    }
    function handlerChangeEmail(e) {
        dispatch(setEmail(e.target.value))
    }
    function handlerSubmit(e) {
        e.preventDefault()
        if (state.fiatamount < 12400 || state.fiatamount > state.reserv) {
            return dispatch(toggleError())
        }
        return navigate('/order')
    }
    return (
        <div className="card order">
            <p className="order_bold">Заявка на обмен</p>
            <form className="order_form" onSubmit={e => handlerSubmit(e)} >
                <input required
                    className="card_num"
                    pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
                    type="text"
                    placeholder="Номер Карты"
                    value={state.cardnumber}
                    onChange={e => handlerChange(e)}
                />
                <input className="email"
                    required
                    type="email"
                    value={state.email}
                    placeholder="Email - адрес"
                    onChange={e => handlerChangeEmail(e)}
                />
                <p className="reg">
                    Ознакомлен с Регламентом работы и принимаю Соглашение пользователя
                </p>
                <button disabled={state.error} className='sbm' type="submit">Перейти к обмену</button>
            </form>
        </div>
    )
}

export default Order
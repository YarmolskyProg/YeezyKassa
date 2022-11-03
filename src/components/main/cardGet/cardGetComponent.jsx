import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcFiat, toggleError } from "../../../redux/actions";
import SelectGet from "./selectGetComponent";


function CardGet(props) {
    let fiat = useSelector(state => {
        return state.coin.activefiat
    })
    let reserv = useSelector(state => {
        return state.coin.reserv
    })
    let dispatch = useDispatch()
    let fiatamount = useSelector(state => {
        return state.coin.fiatamount
    })
    function handlerChange(e) {
        dispatch(calcFiat(e.target.value.replace(/[^0-9\.]/g, '')))
    }
    function handlerFocusOut() {
        dispatch(toggleError())
    }
    return (
        <div className="card get">
            <div className="info_part">
                <div className="text_side">
                    <p className="trans_text">Получаю</p>
                    <p className="bold_text fiat_bold">{fiat.bank}</p>
                </div>
                <img className="fiat_img" src={fiat.img} alt="" />
            </div>
            <SelectGet />
            <div className="tocken_part">
                <input maxLength='12'
                    className="fiat_inp"
                    type="text"
                    value={fiatamount}
                    onChange={(e) => handlerChange(e)}
                    onBlur={handlerFocusOut}
                />
                <p className="short_fiat_titl">{fiat.name}</p>
            </div>
            <p className="kurs_part reserv">
                Резервы: {reserv}
            </p>
        </div>
    )
}
export default CardGet
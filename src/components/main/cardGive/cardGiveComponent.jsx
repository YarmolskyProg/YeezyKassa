import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcCoin, toggleError } from "../../../redux/actions";
import SelectGive from "./selectGiveComponent";

function CardGive(props) {
    let coin = useSelector(state => {
        return state.coin.activecoin
    })
    let coinamount = useSelector(state => {
        return state.coin.coinamount
    })
    let dispatch = useDispatch()
    function handlerChange(e) {
        dispatch(calcCoin(e.target.value.replace(/[^0-9\.]/g, '')))
    }
    function handlerFocusOut() {
        dispatch(toggleError())
    }
    return (
        <div className="card give">
            <div className="info_part">
                <div className="text_side">
                    <p className="trans_text">Отдаю</p>
                    <p className="bold_text coin_bold">{coin.name}</p>
                </div>
                <img className="coin_img" src={coin.img} alt="" />
            </div>
            <SelectGive />
            <div className="tocken_part">
                <input maxLength='12'
                    pattern="\d [0-9]"
                    className="coin_inp"
                    type="text"
                    value={coinamount}
                    onChange={e => handlerChange(e)}
                    onBlur={handlerFocusOut}
                />
                <p className="short_coin_titl">{coin.shortname}</p>
            </div>
            <p className="kurs_part real_kurs">
                Курс: 1 {coin.shortname} = {coin.rate} RUB
            </p>
        </div>
    )
}
export default CardGive
import React, { useEffect } from "react";
import OptionCoin from "./optionCoin";
import OptionFiat from "./optionFiat";
import { useDispatch, useSelector } from "react-redux";
import { LoadCoin } from "../../../../redux/coinReducer";
function Options(props) {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(LoadCoin())
    }, []);
    let coins = useSelector(state => {
        if (state.coin.crypto[0])
            return state.coin.crypto[0].coin
    })
    let fiat = useSelector(state => {
        if (state.coin.crypto[0])
            return state.coin.crypto[0].fiat
    })
    return (
        <div className="options">
            <OptionCoin coins={coins} />
            <OptionFiat fiat={fiat} />
        </div>
    )
}
export default Options
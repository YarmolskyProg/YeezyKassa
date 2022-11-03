import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalcFiat, setActiveFiat } from "../../../../redux/actions";

function SingleFiat({ res }) {

    let active = useSelector(state => {
        return state.coin.activefiat
    })
    let dispatch = useDispatch()
    
    useEffect(() => {
        if (res.bank === "Visa/Master")
            dispatch(setActiveFiat(res))
    }, []);
    function handlerClick(name) {
        dispatch(setActiveFiat(name))
        dispatch(CalcFiat())
    }

    return (
        // list_active
        <li onClick={() => handlerClick(res)} className={res.bank === active.bank ? "list_active" : ""}>
            <div className="coin_targ">
                <img src={res.img} alt="" />
                <p className="title">{res.bank}</p>
            </div>
            <p className="short_tit">{res.name}</p>
        </li>
    )
}
export default SingleFiat
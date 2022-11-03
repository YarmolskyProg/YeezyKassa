import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, Calcs } from "../../../../redux/actions";

function SingleCoin({ res }) {
    let active = useSelector(state => {
        return state.coin.activecoin
    })
    let dispatch = useDispatch()
    useEffect(() => {
        if (res.name === "Bitcoin")
            dispatch(setActive(res))
    }, []);
    function handlerClick(name) {
        dispatch(setActive(name))
        dispatch(Calcs())
    }
    return (

        <li onClick={() => handlerClick(res)} className={res.name === active.name ? "list_active" : ""}>
            <div className="coin_targ">
                <img src={res.img} alt="" />
                <p className="title">{res.name}</p>
            </div>
            <p className="short_tit">{res.shortname}</p>
        </li>
    )
}
export default SingleCoin
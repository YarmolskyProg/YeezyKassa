import React from "react";
import { useDispatch } from "react-redux";
import { setActive } from "../../../redux/actions";

function SelectGiveSingle({ coin, active, setactive }) {
    let dispatch = useDispatch()
    function handlerClick(res) {
        dispatch(setActive(res))
        setactive(!active)
    }
    return (
        <div className="select__item " onClick={() => handlerClick(coin)}>
            <div className="coin_targ">
                <img src={coin.img} alt="" />
                <p shortn={coin.shortname} className="title">{coin.name}</p>
            </div>
        </div>
    )
}
export default SelectGiveSingle
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveFiat } from "../../../redux/actions";


function SelectGetSingle({ fiat, setactive, active }) {
    let dispatch = useDispatch()
    function handlerClick(res) {
        dispatch(setActiveFiat(res))
        setactive(!active)
    }
    return (
        <div className="select__item" onClick={() => handlerClick(fiat)}>
            <div className="coin_targ">
                <img src={fiat.img} alt="" />
                <p shortn={fiat.name} perrev="TRC" className="title">{fiat.bank}</p>
            </div>
        </div>
    )
}
export default SelectGetSingle
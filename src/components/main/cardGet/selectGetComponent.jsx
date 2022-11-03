import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadCoin } from "../../../redux/coinReducer";
import SelectGetSingle from "./selectSingleGet";

function SelectGet(props) {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(LoadCoin())
    }, []);
    const [active, setactive] = useState(false);
    let activefiat = useSelector(state => {
        return state.coin.activefiat
    })
    let fiat = useSelector(state => {
        if (state.coin.crypto[0]) {
            return state.coin.crypto[0].fiat
        }
    })
    return (
        <div className={active ? "select is-active" : "select"}>
            <p className="trans_text">Получаю</p>
            <div className="select__header_sec sel_cur_fiat" onClick={() => setactive(!active)}>
                <span className="select__current">
                    <div className="coin_targ">
                        <img className="mobile_img_fiat" src={activefiat.img} alt="" />
                        <p shortn={activefiat.name} className="title">{activefiat.bank}</p>
                    </div>
                </span>
                <div className="select__icon_sec">
                    <b className={active ? "arrow_sec" : "arrow_down_sec"}></b>
                </div>
            </div>

            <div className="select__body fiat_sel_bod">
                {
                    fiat &&
                    fiat.map((res, index) => {
                        return < SelectGetSingle key={index} fiat={res} setactive={setactive} active={active} />
                    })

                }

            </div>
        </div>
    )
}
export default SelectGet
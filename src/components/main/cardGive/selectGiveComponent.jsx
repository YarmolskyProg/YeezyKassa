import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadCoin } from "../../../redux/coinReducer";
import SelectGiveSingle from "./selectSingle";

function SelectGive(props) {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(LoadCoin())
    }, []);
    const [active, setactive] = useState(false);
    let activecoin = useSelector(state => {
        return state.coin.activecoin
    })
    let coin = useSelector(state => {
        if (state.coin.crypto[0]) {

            return state.coin.crypto[0].coin
        }
    })

    return (
        <div className={active ? "select is-active" : "select"}>
            <p className="trans_text">Отдаю</p>
            <div className="select__header" onClick={() => setactive(!active)}>
                <span className="select__current sel_cur_coin">
                    <div className="coin_targ">
                        <img className="mobile_img_coin" src={activecoin.img} alt="" />
                        <p shortn={activecoin.shortname} perrev="" className="title">{activecoin.name}</p>
                    </div>
                </span>
                <div className="select__icon">
                    <b className={active ? "arrow" : "arrow_down"}></b>
                </div>
            </div>

            <div className="select__body coin_sel_bod">
                {
                    coin &&
                    coin.map((res, index) => {
                        return < SelectGiveSingle active={active} setactive={setactive} key={index} coin={res} />

                    })
                }
            </div>
        </div>
    )
}

export default SelectGive
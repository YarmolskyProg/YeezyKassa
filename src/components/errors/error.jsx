import React from "react";
import { useSelector } from "react-redux";
function Error(props) {
    let error = useSelector(state => {
        return state.coin.error
    })
    return (
        <p className={error ? 'error' : 'error dsp_none'}>Сумма должна быть больше 12400 руб. и не привышать резерв </p>
    )
}
export default Error
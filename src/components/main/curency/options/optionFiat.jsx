import React from "react";
import SingleFiat from "./singleFiat";

function OptionFiat({ fiat }) {
    return (
        <div className="card fiat">
            <ul>
                {
                    fiat &&
                    fiat.map((res, index) => {
                        return <SingleFiat key={index} res={res} />
                    })
                }
            </ul>
        </div>
    )
}

export default OptionFiat
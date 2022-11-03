import React from "react";
import SingleCoin from "./singleCoin";

function OptionCoin({ coins }) {
    return (
        <div className="card coin">
            <ul>
                {coins &&
                    coins.map((res, index) => {
                        return <SingleCoin key={index} res={res} />
                    })
                }
            </ul>
        </div>
    )
}

export default OptionCoin
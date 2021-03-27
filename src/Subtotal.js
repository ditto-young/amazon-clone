import React from 'react';
import './subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    <>
                        <p>
                            Subtotal (0 items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> this order contains a gift
                        </small>
                    </>
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
        </div>
    )
}

export default Subtotal
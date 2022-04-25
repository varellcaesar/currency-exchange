import React from "react";
import { currencyFormat, translateCurrency } from "../../UtilFunction";
import './cardslist.css'

const CardList = ({currency, rates, idx, onDelete}) => {
    return (
        <div className="containers">
            <div className="boxs">
                <div className="wrapper-1">
                    <text className="text-1">{currency}</text>
                    <text className="text-1">{currencyFormat(rates)}</text>
                </div>
                <text className="text-2">{`${currency} - ${translateCurrency(currency)}`}</text>
                <text className="text-3">{`1 EUR = ${currency} ${currencyFormat(rates)}`}</text>
            </div>
            {idx!==0&&
                <div onClick={onDelete} className="wrapper-remove">
                    <text className="text-remove">(-)</text>
                </div>
            }
        </div>
    )
}

export default CardList
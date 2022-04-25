import React from "react";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <text className="title">EUR - Euro</text>
            <div className="wrapper-currency">
                <text className="text-currency">EUR</text>
                <text className="text-currency">1.00</text>
            </div>
        </div>
    )
}

export default Header
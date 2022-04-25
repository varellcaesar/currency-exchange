import React from "react";
import './button.css'

const Button = ({onClick, text}) => {
    return (
        <div onClick={onClick} className="wrappers">
            <text className="text-buttons">{text}</text>
        </div>
    )
}

export default Button
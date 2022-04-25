import React, { Fragment, useState } from "react";
import './modalselect.css'

const ModalSelect = props => {
    const [selected, setSelected] = useState({})
    return (
        <>
            {props.show &&
                <Fragment>
                    <div onClick={()=>props.setShow(false)} className="containerr"></div>
                    <div className="bodys">
                        {props.data.map((item, index) => (
                            <div onClick={() =>{
                                props.setShow(false)
                                setSelected(item)
                                props.setData(item.name)
                            }} style={{backgroundColor: selected.name == item.name ? '#E6F7FF' : 'white'}} className="content">
                                <text className="texts">{item.name}</text>
                            </div>
                            
                        ))}
                    </div>
                </Fragment>
            }
        </>
    )
}

export default ModalSelect
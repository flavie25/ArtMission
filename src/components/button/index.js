import React from 'react'
import mstyle from './button.module.css';

const Button = ({onClick,buttonName, style}) =>{

    return ( 
        <div className={mstyle.button}>
            <button className={style} onClick={onClick}>{buttonName}</button>
        </div>      
    )
}

export default Button
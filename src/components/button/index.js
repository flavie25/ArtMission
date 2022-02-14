import React from 'react'

const Button = ({onClick, buttonName, style}) =>{

    return ( 
        <div>
            <button className={style} onClick={onClick}>{buttonName}</button>
        </div>      
    )
}

export default Button
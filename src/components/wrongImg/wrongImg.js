import React, { useState } from 'react'

import './imgwrong.css'

const WrongImg= ({url, style}) =>{
    const [answer, setAnswer] = useState(false);
    const cssChange = () =>{
        setAnswer(!answer);
    }
    return ( 
        <div>
            <button className={answer ? "img-q4 wrongImg" : "img-q4" } onClick={cssChange}><img className={style} src={url}/></button>
        </div>      
    )
}

export default WrongImg
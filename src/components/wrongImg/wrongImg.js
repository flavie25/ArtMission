import React, { useState } from 'react'

import './imgwrong.css'

const WrongImg= ({url, style}) =>{
    const [answer, setAnswer] = useState(false);
    const cssChange = () =>{
        setAnswer(!answer);
    }
    return ( 
        <a className={answer ? "linkImg wrongImg" : "linkImg" } onClick={cssChange}><img className={style} src={url}/></a>  
    )
}

export default WrongImg
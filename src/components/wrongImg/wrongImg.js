import React, { useState } from 'react'

import './imgwrong.css'

const WrongImg= ({url, className, alt}) =>{
    const [answer, setAnswer] = useState(false);
    const cssChange = () =>{
        setAnswer(!answer);
    }
    return ( 
        <a href="" className={answer ? "linkImg wrongImg" : "linkImg" } onClick={cssChange}><img alt={alt} className={className} src={url}/></a>  
    )
}

export default WrongImg
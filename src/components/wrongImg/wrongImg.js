import React, { useState } from 'react'

import './imgwrong.css'

const WrongImg= ({url, className, alt}) =>{
    const [answer, setAnswer] = useState(false);
    const cssChange = () =>{
        setAnswer(true);
    }
    return ( 
        <button href="" className={answer ? "linkImg wrongImg" : "linkImg wrong hidden-on-writing" } onClick={cssChange}><img alt={alt} className={className} src={url}/></button>  
    )
}

export default WrongImg
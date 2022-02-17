import React, { useState } from 'react'

import './wrong.css'

const WrongButton = ({buttonName}) =>{
    const [answer, setAnswer] = useState(false);
    const cssChange = () =>{
        setAnswer(true);
    }
    return ( 
        <div>
            <button className={answer ? "wrongButton wrong" : "answerButton hidden-on-writing" } onClick={cssChange}>{buttonName}</button>
        </div>      
    )
}

export default WrongButton
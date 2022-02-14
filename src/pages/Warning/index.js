import React from 'react'
import style from './warning.module.css'
import warning from '../../Assets/warning.svg'
import headphone from '../../Assets/headphone.svg'
import { Link } from 'react-router-dom'

const Warning = () =>{

    return (
        <div className={style.warning}>
            <div className={style.headphone}>
                <img src={headphone} alt="image de casque" />
                <p>Utilisez vos écouteurs pour profiter pleinement de l'expérience</p>
            </div>
            <div className={style.warning}>
                <img src={warning} alt="image panneau attention" />
                <p>Rappel</p>
            </div>
            <p>Il est interdit de toucher les oeuvres</p>
            <Link to="/question" exact>j'ai compris</Link>
        </div>      
    )
}

export default Warning
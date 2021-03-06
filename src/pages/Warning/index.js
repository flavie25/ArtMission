import React from 'react'
import style from './warning.module.css'
import warning from '../../Assets/warning.svg'
import headphone from '../../Assets/headphone.svg'
import { Link } from 'react-router-dom'

const Warning = () =>{

    return (
        <div className={style.containerWarning}>
            <div className={style.warning}>
                <div className={style.headphone}>
                    <img src={headphone} alt="casque" />
                    <p>Utilisez vos écouteurs pour profiter pleinement de l'expérience</p>
                </div>
                <div className={style.warningLogo}>
                    <div className={style.warningText}>
                        <img src={warning} alt="panneau attention" />
                        <p>Rappel</p>
                    </div>
                    <p>Nous vous rappelons qu’il est interdit de toucher aux oeuvres</p>
                </div>
            </div>
            <Link to="/introduction" exact>j'ai compris</Link>
        </div>      
    )
}

export default Warning
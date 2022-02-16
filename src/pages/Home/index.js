import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logoHome.svg'

const Home = () =>{
    
    return (
        <div className={style.home}>
            <div className={style.topFlex}>
                <div className={style.logoHome}>
                    <img src={logo} alt="logo Art'Mission" />
                </div>
                <h2>Bienvenu sur</h2>
                <h1>ART'MISSION</h1>
                <p>L’expérience se réalise dans la salle d’Odilon Redon et l’art autour de 1900</p>
                <Link to="/warning" className={style.warnButton}>commencer l'expérience</Link>
            </div>
            <Link to="/credits" className={style.credits}>Crédits</Link>
        </div>      
    )
}

export default Home
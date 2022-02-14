import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'


const Home = () =>{
    
    return (
        <div className={style.home}>
            <h1>Hello</h1>
            <p>kjfhjhkzgrqghrehghroghroge</p>
            <Link to="/question" className="">question</Link>
        </div>      
    )
}

export default Home
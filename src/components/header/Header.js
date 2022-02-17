import React from 'react';
import lottie from 'lottie-web';
import animationA from '../../Assets/Top_Art_Mission.json'
import animationB from '../../Assets/Top_Art_Mission_2.json'
import style from './header.module.css'
import Player from '../../components/audioPlayer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({screen, speakerId}) => {
  const animationSpeaker = speakerId? animationA : animationB
  React.useEffect(() =>{
    lottie.loadAnimation({
      container: document.querySelector('#lottie-player'),
      animationData: animationSpeaker ,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
   }) 
  

  const location = useLocation();

  const delayeScroll = () => {
    window.setTimeout(scroll, 6000);
    console.log("time")
  }

  const scroll = () =>{
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'end' });
    console.log("work")
  }
  useEffect(() => {
    console.log('Location changed');
    delayeScroll()
  }, [location]);

 

  return (
    <div className={style.header}>
      <Player screen={screen}/>
      <div  id="lottie-player" className={style.lottiePlayer}></div>
    </div>
  );
};

export default Header;
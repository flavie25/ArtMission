import React from 'react';
import lottie from 'lottie-web';
import animationA from '../../Assets/Top_Art_Mission.json'
import animationB from '../../Assets/Top_Art_Mission_2.json'
import style from './header.module.css'
import Player from '../../components/audioPlayer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import App from '../../App/index'

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

  //  const scroll = () =>{
  //       document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'end' });
  //     }
  // const location = useLocation();
  // useEffect(() => {
  //   const delayeScroll = () => {
  //     window.setTimeout(scroll, 5000);
  //   }
  //   delayeScroll()
  // }, [location]);

  // useEffect(() => {
  //   const scroll = () =>{
  //     document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'end' });
  //     // window.requestAnimationFrame(scroll())
  //   }
  //   scroll()
  //   console.log('oui'); 
  // }, []);

  return (
    <div className={style.header}>
      <Player screen={screen}/>
      <div  id="lottie-player" className={style.lottiePlayer}></div>
    </div>
  );
};

export default Header;
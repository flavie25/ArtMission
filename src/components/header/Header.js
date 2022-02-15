import React from 'react';
import lottie from 'lottie-web';
import animation from '../../Assets/Top_Art_Mission.json'
import style from './header.module.css'
import Player from '../../components/audioPlayer'

const Header = () => {
  React.useEffect(() =>{
    lottie.loadAnimation({
      container: document.querySelector('#lottie-player'),
      animationData: animation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
   }) 
  
  return (
    <div className={style.header}>
      <Player />
      <div id="lottie-player" className={style.lottiePlayer}></div>
    </div>
  );
};

export default Header;
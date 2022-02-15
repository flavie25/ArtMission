import React from 'react';
import lottie from 'lottie-web';
import animation from '../../Assets/Top_Art_Mission.json'
import style from './header.module.css'

const header = () => {
  let Lanimation = () => {lottie.loadAnimation({
    container: document.querySelector('#lottie-player'),
    animationData: animation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
  });
  console.log("oui");
  }

  return (
    <div id="lottie-player" onLoad={Lanimation()} className={style.lottiePlayer}> 
    </div>
  );
};

export default header;
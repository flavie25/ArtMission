import React from 'react';
import lottie from 'lottie-web';
import animationA from '../../Assets/Top_Art_Mission.json'
import animationB from '../../Assets/Top_Art_Mission_2.json'
import style from './header.module.css'
import Player from '../../components/audioPlayer'

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

  return (
    <div className={style.header}>
      <Player screen={screen}/>
      <div  id="lottie-player" className={style.lottiePlayer}></div>
    </div>
  );
};

export default Header;
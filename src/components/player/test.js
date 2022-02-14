import React, { useState } from 'react';
import style from './player.module.css';
import './player.css'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../Assets/audio.mp3'


const Player = () => {
  const[mute, setMute] = useState(false);
  const[play, setPlay] = useState(false);
   const mutedOnOff = ()=> {
    setMute(!mute);
  }
  const playOnOff = ()=> {
    setPlay(!play);
  }
  return (
    <div className={style.player}>
      <button onClick={mutedOnOff}>Muted</button> 
      <button onClick={playOnOff}>Play</button> 
      <ReactAudioPlayer autoPlay onPlay={play} src={audio} controls={player} muted={mute}/>
    
      </div>
  );
};

export default Player;
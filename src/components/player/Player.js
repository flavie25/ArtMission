import React from 'react';
import style from './player.module.css';
import './player.css'
import AudioPlayer from 'react-h5-audio-player';
import audio from '../../Assets/audio.mp3'


const Player = () => {
  return (
    <div className={style.player}>
      <AudioPlayer src={audio} autoPlay={true}/>
    </div>
  );
};

export default Player;
import React from 'react';
import style from './player.module.css';
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../Assets/audio.mp3'

const Player = () => {
  return (
    <div className={style.player}>
      <ReactAudioPlayer
        src={audio}
        controls
      />
    </div>
  );
};

export default Player;
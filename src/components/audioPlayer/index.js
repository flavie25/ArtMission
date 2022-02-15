import React from 'react';
import './player.css';
import AudioPlayer from 'react-h5-audio-player';
import audio from '../../Assets/audio.mp3'
import play from './../../Assets/audioPlay.png'
import pause from './../../Assets/audioPause.png'


const Player = () => {
  return (
    <div className="player">
      <AudioPlayer 
        src={audio} 
        autoPlay={true} 
        customIcons={
          {play: <img src={play} />, 
          pause: <img src={pause}/> }}
        showJumpControls={false} 
        customVolumeControls={[]} 
        customAdditionalControls={[]}/>
    </div>
  );
};

export default Player;
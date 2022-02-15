import React, { useContext } from 'react';
import './player.css';
import AudioPlayer from 'react-h5-audio-player';
// import audio from '../../Audio/agent208-1.mp3'
import play from './../../Assets/audioPlay.png'
import pause from './../../Assets/audioPause.png'

import AppContext from './../../contexts/AppContext'


const Player = ({screen}) => {
  const {audios} = useContext(AppContext);
  const audio = audios[screen - 1].url
  console.log(audio)
  // const audio = "agent208-1.mp3"
  return (
    <div className="player">
      {/* <AudioPlayer 
        src={audio}
        autoPlay={true} 
        customIcons={
          {play: <img src={play} />, 
          pause: <img src={pause}/> }}
        showJumpControls={false} 
        customVolumeControls={[]} 
        customAdditionalControls={[]}/> */}
        <audio src={audio} autoPlay/>
    </div>
  );
};

export default Player;
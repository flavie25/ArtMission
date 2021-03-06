import React, { useContext, useState } from 'react';
import './player.css';
import play from './../../Assets/audioPlay.png'
import pause from './../../Assets/audioPause.png'

import AppContext from './../../contexts/AppContext'


const Player = ({screen}) => {
  const {audios} = useContext(AppContext);
  const urlAudio = audios[screen - 1].url;
  const[playing, setPlaying] = useState(true);
  const onEnded = () =>{
    setPlaying(false)
  }
  
  const playPause = () => { 
    const audio = document.getElementById('audioplayer');
    playing ? audio.pause() : audio.play();
    setPlaying(!playing)
  }

  return (
    <div className="player">
        <button className="buttonPlayPause" onClick={playPause}>{playing ? <img src={pause} alt="button pause"/> : <img src={play} alt="button play"/>}</button>
        <audio onEnded={onEnded} id="audioplayer" src={urlAudio} autoPlay/>
    </div>
  );
};

export default Player;
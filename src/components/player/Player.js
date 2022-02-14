import React from 'react';
import style from './player.module.css';
import './player.css'
import AudioPlayer from 'react-h5-audio-player';
import audio from '../../Assets/audio.mp3'


const Player = () => {
  // const playerOn = () =>{
  //   const url ={audio};
  //   ReactAudioPlayer({ url, playing: true });
  //   ("caca")
  // }
  return (
    <div className={style.player}>
      {/* <button onClick={playerOn}>Audio</button> */}
      <AudioPlayer src={audio} autoPlay={true}/>
      <AudioPlayer/>
    </div>
  );
};

export default Player;
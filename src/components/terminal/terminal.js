import React, { useState } from 'react';
import './../question/question.css'
import './terminal.css'


const Terminal = ({tableau, numStep, speakerId}) => {
  const d = new Date()
  let hours = 1 + d.getUTCHours()
  let minutes = d.getUTCMinutes()
  let seconds = d.getUTCSeconds()
  return (
      <div className="page-head">
        {tableau[numStep - 1].texts.map((text) => (
          <div className="textContainer">
            <div className="leftText">
              <p>{speakerId ? "Agent.206" : "Boss.3008"}</p>
              <p id="date">{hours}.{minutes}.{seconds}</p>
            </div>
            <p id="text">{text}</p>
          </div>
        ))}
      </div>
  );
};

export default Terminal;
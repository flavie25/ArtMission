import React from 'react';
import './../question/question.css'


const Terminal = ({tableau, numStep}) => {
  const d = new Date()
  let hours = 1 + d.getUTCHours()
  let minutes = d.getUTCMinutes()
  let seconds = d.getUTCSeconds()

  return (
    <div >
      <div className="top">
        {tableau[numStep - 1].texts.map((text) => (
          <div className="textContainer">
            <div className="leftText">
              <p>Agent.206</p>
              <p id="date">{hours}.{minutes}.{seconds}</p>
            </div>
            <p id="text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
import { useEffect, useState } from 'react';
import './../question/question.css'
import './terminal.css'

const Terminal = ({tableau, numStep, speakerId}) => {
  const d = new Date()
  let hours = 1 + d.getUTCHours()
  let minutes = d.getUTCMinutes()
  let seconds = d.getUTCSeconds()

  const [textAff, setTextAff] = useState([]);

  document.body.classList.add('is-writing');

  useEffect(() => {
    if( tableau[numStep - 1].texts.length === textAff.length) {
      window.setTimeout( removeClass, 1000); 
      window.setTimeout( lastScroll, 1100);
    }else{
      setTimeout(() => {
        setTextAff([...textAff,tableau[numStep - 1].texts[textAff.length]])       
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 850)
    }      
  },[textAff.length])

  const removeClass = () =>{
    document.body.classList.remove('is-writing')
  }
  const lastScroll = () =>{
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
      <div className="page-head">
        {/* {tableau[numStep - 1].texts.map((text) => ( }*/
        textAff.map((text) => (
          <div className="textContainer">
            <div className="leftText">
              <p>{speakerId ? "Agent.206" : "Boss.3008"}</p>
              <p className="date">{hours}.{minutes}.{seconds}</p>
            </div>
            <p className="text">{text}</p>
          </div>
        ))}
      </div>
  );
};

export default Terminal;
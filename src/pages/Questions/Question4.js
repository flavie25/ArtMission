import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Terminal from '../../components/terminal/terminal';
import WrongImg from '../../components/wrongImg/wrongImg';
import AppContext from '../../contexts/AppContext'

const Question4 = () => {
    const {questions} = useContext(AppContext)
  return (
    <div className="question4">
        <Header screen={8}/>
        <div className="topBottom">
          <div className="top">
            <Terminal tableau={questions} numStep={4}/>
          </div>
          <div className="bottom">
            <div class="wrapper-imgs">
              {questions[3].answers.map((url) =>
              <div className="container-img">
                {url.correct ? <Link className="linkImg" to={'/finalchoice'}><img className="img-q4" src={url.text}/></Link> : <WrongImg style="img-q4" url={url.text}/>} 
              </div>
              )}
            </div>
            <Link to="/researche3">RETOUR</Link>
          </div>
        </div>
    </div>
  );
};

export default Question4;
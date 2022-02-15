import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'

const Question4 = () => {
    const {questions} = useContext(AppContext)
  return (
    <div className="question5">
        <Header screen={8}/>
        <Terminal tableau={questions} numStep={4}/>
        <div class="wrapper-imgs">
        {questions[3].answers.map((url) =>
        <div className="container-img">
          <img className="img-q4" src={url.text}/>
        </div>
        )}
        </div>
    </div>
  );
};

export default Question4;
import React from 'react';
import Question from '../../components/question/question';
import './questions.css';

const Question3 = () => {
  return (
    <div className="question3">
        <Question numQuestion={3} numScreen={5}/>
    </div>
  );
};

export default Question3;
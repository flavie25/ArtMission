import React from 'react';
import Question from '../../components/question/question';

const Question2 = () => {
  return (
    <div>
      <Question numQuestion={2} numScreen={4} linkTo={"/question3"}/>
    </div>
  );
};

export default Question2;
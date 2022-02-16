import React from 'react';
import Question from '../../components/question/question';

const Question2 = () => {
  return (
    <div>
      <Question numQuestion={2} numScreen={5} linkTo={"/question3"} backButton={"/researche2"}  speakerName={true}/>
    </div>
  );
};

export default Question2;
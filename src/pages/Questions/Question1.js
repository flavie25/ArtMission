import Question from '../../components/question/question';

const Question1 = () => {

  return (
    <div>
      <Question numQuestion={1} numScreen={3} linkTo={"/researche2"} backButton={"/researche"} speakerName={true}/>
    </div>
  );
};

export default Question1;
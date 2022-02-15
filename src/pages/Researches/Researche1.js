import Researche from '../../components/researche/researche';
import style from './researches.module.css'

const Researche1 = () => {

  return (
    <div className={style.research1}>
      <Researche numScreen={2} numResearche={1} linkTo={"/question"} textLinkTo={"Je suis devant le tableau"}/>
    </div>
  );
};

export default Researche1;
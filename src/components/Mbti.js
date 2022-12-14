import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { next } from '../store/modules/mbti';
import Progress from './Progress';
import SkyblueButton from './SkyblueButton';


const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

const Mbti = () => {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page -1].question}</SurveyQuestion>
      <ul>
        {survey[page-1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton text={el.text} clickEvnet={ ()=> dispatch(next())}/>
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length}/>
    </>
  )
}

export default Mbti;




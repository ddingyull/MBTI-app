import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { next } from './../store/modules/mbti'
import { useDispatch } from 'react-redux';

const Start = () => {

  const dispatch = useDispatch();

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main3.jpeg" alt="메인 이미지"/>
      <SubHeader>개발자가 흔히 접하는 상황에 따른 MBTI를 알아 봅시다!</SubHeader>
      <OrangeButton text="테스트 시작" clickEvnet={() => dispatch(next())}/>
    </>
  )
}

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: inherit;
  border-radius: 10px;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;

`;

export default Start

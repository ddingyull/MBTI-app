import styled from 'styled-components';

const MyButton = styled.a`
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.2em;
  padding: 1.0em 1.5em;
  background-color: ${(props) => props.mainColor}; //그때마다 props로 값을 전달받아서 색 변경
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none; // mouse 드래그 안되게 하는 속성
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  margin-top: 1em;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.subColor};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${(props) => props.subColor};
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out;
  }
  &:hover {
    background: ${(props) => props.hoverColor};
    transform: translateY(0.25em);
  }
`;

const Button = ({ text, clickEvent, mainColor, subColor, hoverColor}) => {
  return (
    <MyButton       
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  )
}

export default Button;


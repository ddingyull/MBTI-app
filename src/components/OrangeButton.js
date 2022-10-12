import Button from './Button';


const OrangeButton = ({text, clickEvnet}) => {
  return (
    <Button
    text={text}
    clickEvent={clickEvnet}
    mainColor="#fae243" 
    subColor="#fa9f1a" 
    hoverColor="#faf000"
    />
  )
}

export default OrangeButton;

import Button from './Button';


const SkyblueButton = ({text, clickEvnet}) => {
  return (
    <Button
    text={text}
    clickEvent={clickEvnet}
    mainColor="#7edcfa" 
    subColor="#3a82e0" 
    hoverColor="#cfecf2"
    />
  )
}

export default SkyblueButton



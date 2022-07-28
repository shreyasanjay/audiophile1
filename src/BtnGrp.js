import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function BtnGrp() {
  return (
    <div className=''>
        <Alert variant="primary" className='player' style={{textAlign: 'center'}}>
          <div className='col'>
            <img src='./player.png' width='100' height='100'></img>
          </div>
          <div className='col'>
            <strong>Currently Playing...</strong>
            <marquee><h2>As it was- Harry Styles</h2></marquee>
            <ButtonGroup size="lg" className="mb-2 px-2">
              <Button>&#x23EE;</Button>&nbsp;&nbsp;
              <Button style={{borderRadius: '50%'}}>||</Button>&nbsp;&nbsp;
              <Button>&#x23ED;</Button>
            </ButtonGroup>
          </div>
      </Alert>
    </div>
);
}
export default BtnGrp;
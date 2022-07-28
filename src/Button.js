import Button from 'react-bootstrap/Button';
import './App.css';
export default function ScrT() {
  return (
    <div>
      <Button variant='primary' className='but'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        Top
      </Button>
    </div>
  );
}

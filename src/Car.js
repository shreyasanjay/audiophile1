import Carousel from 'react-bootstrap/Carousel';
import './App.css';
function Car() {
  return (
    <Carousel className='mb-5 car'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="dua.jpg"
          alt="First slide"/>
        <Carousel.Caption className='caption'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./girl.jpg"
          alt="First slide"/>
        <Carousel.Caption className='caption'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="offline.jpg"
          alt="Second slide"/>

        <Carousel.Caption className='caption'>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="artist.jpg"
          alt="Third slide"/>
        <Carousel.Caption className='caption'>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Car;
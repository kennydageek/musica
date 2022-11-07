import Hero from '../components/Hero/Hero';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={7}>
          <Hero />
        </Col>
        <Col xs={4}>
          <div className="random">kdkdkd</div>
        </Col>
      </Row>
    </>
  );
};

export default Home;

import Hero from '../components/Hero/Hero';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChartCard from '../components/ChartCard/ChartCard';
import style from './home.module.css';
import AlbumCard from '../components/AlbumCard/AlbumCard';

const Home = () => {
  return (
    <>
      <Row className={style.row}>
        <Col xs={7}>
          <Hero />
        </Col>
        <Col xs={4}>
          <h1 className={style.heading}>Top Charts</h1>
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </Col>
      </Row>

      <h1 className={`${style.heading} mt-5  `}>New Releases</h1>
      <Row className={`mt-4 ${style.row} ${style.albumrow}`}>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
        <Col xs={2} className={`${style.albumcolumn}`}>
          <AlbumCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;

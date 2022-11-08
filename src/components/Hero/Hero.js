import style from './hero.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import customers from '../../assets/images/customers.png';
import heart from '../../assets/icons/Heart.svg';
import hero from '../../assets/images/hero.svg';
import slur from '../../assets/images/slur-design.svg';

const Hero = () => {
  return (
    <>
      <div className={style.container}>
        <Row>
          <Col xs={8} className={style.wrapper_text}>
            <p className={style.title}>Curated playlist</p>
            <h2 className={style.heading}>R & B Hits</h2>
            <p className={style.description}>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit,
              <br /> and so much more
            </p>
            <div className={style.footer}>
              <img src={customers} alt="customers" />
              <img src={heart} alt="like" />
              <p>33k likes</p>
            </div>
          </Col>
          <Col xs={4} className={style.imgsvg}>
            <img src={hero} alt="hero" />
          </Col>
        </Row>

        <img src={slur} className={style.slur} alt="" />
      </div>
    </>
  );
};

export default Hero;

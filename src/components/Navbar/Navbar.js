import style from './navbar.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../logo.svg';
import search from '../../assets/icons/search.svg';

const Navbar = () => {
  return (
    <Container fluid className={style.container}>
      <Row>
        <Col xs={1} className={style.imgcontainer}>
          <img src={logo} alt="logo" />
        </Col>
        <Col xs={9} className={style.inputcontainer}>
          <label htmlFor="search">
            <img src={search} alt="search-icon" />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search artists"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;

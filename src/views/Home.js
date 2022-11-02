import React from 'react';
import AppSearch from '../components/AppSearch/AppSearch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';
import style from './Home.module.css';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={1} className={style.image}>
          <img src={logo} alt="musica logo" />
        </Col>
        <Col className={style.container}>
          <AppSearch />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

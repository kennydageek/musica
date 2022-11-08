import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} md={1} className="sidebar">
            <Sidebar />
          </Col>
          <Col xs={9} md={11}>
            <div className="heading">
              <Home />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

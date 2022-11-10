import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './views/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Playlist from './views/Playlist/Playlist';
import Radio from './views/Radio/Radio';
import Video from './views/Video/Video';

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/radio" element={<Radio />} />
                <Route path="/video" element={<Video />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

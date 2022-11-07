import style from './sidebar.module.css';
import Container from 'react-bootstrap/Container';
import home from '../../assets/icons/Home.svg';
import radio from '../../assets/icons/radio.svg';
import video from '../../assets/icons/video-horizontal.svg';
import playlist from '../../assets/icons/music-library-2.svg';
import profile from '../../assets/icons/profile.svg';
import logout from '../../assets/icons/Logout.svg';

const Sidebar = () => {
  return (
    <>
      <Container className={style.container}>
        <img src={home} alt="home" className="home" />
        <img src={playlist} alt="home" className="playlist" />
        <img src={radio} alt="home" className="radio" />
        <img src={video} alt="home" className="video" />
      </Container>

      <Container className={style.container}>
        <img src={profile} alt="home" />
        <img src={logout} alt="home" />
      </Container>
    </>
  );
};

export default Sidebar;

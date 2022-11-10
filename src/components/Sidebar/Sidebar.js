import style from './sidebar.module.css';
import Container from 'react-bootstrap/Container';
import home from '../../assets/icons/Home.svg';
import radio from '../../assets/icons/radio.svg';
import video from '../../assets/icons/video-horizontal.svg';
import playlist from '../../assets/icons/music-library-2.svg';
import profile from '../../assets/icons/profile.svg';
import logout from '../../assets/icons/Logout.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    {
      src: home,
      active: true,
      path: '/',
    },
    {
      src: playlist,
      active: false,
      path: '/playlist',
    },
    {
      src: radio,
      active: false,
      path: '/radio',
    },
    {
      src: video,
      active: false,
      path: '/video',
    },
  ];

  return (
    <>
      <Container className={style.container}>
        {navItems.map((item) => {
          return (
            <div key={item.path}>
              <Link to={item.path} className={`${style.anchor}`}>
                <img src={item.src} alt="" />
              </Link>
            </div>
          );
        })}
      </Container>

      <Container className={style.container}>
        <img src={profile} alt="profile" />
        <img src={logout} alt="logout" />
      </Container>
    </>
  );
};

export default Sidebar;

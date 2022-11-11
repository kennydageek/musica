import style from './sidebar.module.css';
import Container from 'react-bootstrap/Container';
import home from '../../assets/icons/Home.svg';
import homesec from '../../assets/icons/Home-uncolored.svg';
import radio from '../../assets/icons/radio.svg';
import video from '../../assets/icons/video-horizontal.svg';
import videosec from '../../assets/icons/video-horizontal-colored.svg';
import playlist from '../../assets/icons/music-library-2.svg';
import playlistsec from '../../assets/icons/music-library-colored.svg';
import radiosec from '../../assets/icons/radio-colored.svg';
import profile from '../../assets/icons/profile.svg';
import logout from '../../assets/icons/Logout.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  let [navItems, setNavItem] = useState([
    {
      id: 1,
      src: home,
      active: true,
      path: '/',
      altsrc: homesec,
    },
    {
      id: 2,
      altsrc: playlist,
      active: false,
      path: '/playlist',
      src: playlistsec,
    },
    {
      id: 3,
      altsrc: radio,
      active: false,
      path: '/radio',
      src: radiosec,
    },
    {
      id: 4,
      altsrc: video,
      active: false,
      path: '/video',
      src: videosec,
    },
  ]);

  const handleRouting = (item) => {
    const updateActive = navItems;
    updateActive.forEach((cur) => {
      if (cur.id === item.id) {
        cur.active = true;
      } else cur.active = false;
    });

    setNavItem([...updateActive]);
  };

  return (
    <>
      <Container className={style.container}>
        {navItems.map((item) => {
          return (
            <div key={item.path}>
              <Link to={item.path} className={`${style.anchor}`}>
                <img
                  src={item.active ? item.src : item.altsrc}
                  onClick={() => handleRouting(item)}
                  alt=""
                />
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

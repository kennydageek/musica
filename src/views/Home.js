import Hero from '../components/Hero/Hero';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChartCard from '../components/ChartCard/ChartCard';
import style from './home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

import AlbumCard from '../components/AlbumCard/AlbumCard';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const Home = () => {
  const swiperRef = useRef();

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
      {/* <Row className={`mt-4 ${style.row} ${style.albumrow}`}> */}
      <Row className={style.swipe}>
        <Swiper
          className={style.swipe}
          // loop={true}
          draggable={true}
          slidesPerView={1}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            // 320: {
            //   width: 320,
            //   slidesPerView: 1,
            // },
            480: {
              width: 480,
              slidesPerView: 2,
              spaceBetween: 15,
            },

            640: {
              width: 640,
              slidesPerView: 3,
              spaceBetween: 15,
            },

            960: {
              width: 960,
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide className={`${style.swiperslide}`}>
            <AlbumCard />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperslide}`}>
            <AlbumCard />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperslide}`}>
            <AlbumCard />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperslide}`}>
            <AlbumCard />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperslide}`}>
            <AlbumCard />
          </SwiperSlide>
          <SwiperSlide className={`${style.swiperslide}`}>
            <AlbumCard />
          </SwiperSlide>
        </Swiper>
        <div>
          <p
            className={`${style.prev}`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &lt;
          </p>
          <p
            className={`${style.next}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            &gt;
          </p>
        </div>
      </Row>

      <Row className={`${style.musicplayerwrapper}`}>
        <MusicPlayer className={`${style.musicplayer}`} />
      </Row>
    </>
  );
};

export default Home;

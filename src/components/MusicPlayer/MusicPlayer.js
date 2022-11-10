// import ReactAudioPlayer from 'react-audio-player';
import style from './musicplayer.module.css';
import image from '../../assets/images/AlbumCover.jpg';
import shuffle from '../../assets/icons/shuffle.svg';
import prev from '../../assets/icons/previous.svg';
import play from '../../assets/icons/Play.svg';
import next from '../../assets/icons/next.svg';
import repeat from '../../assets/icons/repeate-one.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import volume from '../../assets/icons/volume-high.svg';

const MusicPlayer = () => {
  return (
    <div className={`${style.container}`}>
      {/* <h1>Music Player</h1> */}
      {/* <ReactAudioPlayer src="horse.ogg" autoPlay controls /> */}
      <div className={`${style.flex}`}>
        <div className={`${style.imagecontainer}`}>
          <img src={image} alt="" />
        </div>
        <div className={`${style.details}`}>
          <p className="title">Seasons in</p>
          <p className="artist">James</p>
        </div>
      </div>

      <div className={`${style.controls}`}>
        <div className={`${style.controlimage}`}>
          <img src={shuffle} alt="" />
          <img src={prev} alt="" />
          <img src={play} alt="" />
          <img src={next} alt="" />
          <img src={repeat} alt="" />
        </div>
        <div>
          <ProgressBar now={40} className={`${style.progressbar}`} />
        </div>
      </div>
      <div className={`${style.volume}`}>
        <img src={volume} alt="" />
        <ProgressBar now={30} className={`${style.progressbar}`} />
      </div>
    </div>
  );
};

export default MusicPlayer;

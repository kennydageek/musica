import style from './album.module.css';
import image from '../../assets/images/AlbumCover.jpg';

const AlbumCard = () => {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.imagecontainer}`}>
        <img src={image} alt="" />
      </div>
      <p className={`${style.title} mt-2`}>Life in a bubble</p>
    </div>
  );
};

export default AlbumCard;

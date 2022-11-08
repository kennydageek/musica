import style from './charts.module.css';
import cardImg from '../../assets/images/chartcardimg.png';
import heart from '../../assets/icons/orangeheart.svg';

const ChartCard = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.image_and_text}>
          <div className={style.image_wrapper}>
            <img src={cardImg} alt="" className="" />
          </div>
          <div className={style.text}>
            <p className={style.title}>Golden age of 80s</p>
            <p className={style.artist}>Sean swadder</p>
            <p className={style.duration}>2:34:45</p>
          </div>
        </div>
        <div className={style.heart}>
          <img src={heart} alt="" />
        </div>
      </div>
    </>
  );
};

export default ChartCard;

import AppStyle from './AppStyle.module.css';
import search from '../../assets/icons/search.svg';

const AppSearch = () => {
  return (
    <div className={AppStyle.container}>
      <img src={search} alt="search" className={AppStyle.search} />
      <input
        type="text"
        placeholder="Search artists"
        className={AppStyle.input}
      />
    </div>
  );
};

export default AppSearch;

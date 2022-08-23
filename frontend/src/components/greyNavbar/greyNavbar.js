import './greyNavbar.scss';
import magnfGlass from '../../assets/svgs/search_icon.svg';

const GreyNavbar = () => {
  return (
    <div className="greyNavbar">
      <div className='nav'>
        <ul className='ul-left'>
          <li className='li'>
            <img className='magnfGlass' src={magnfGlass}></img>
            <input className='search-posts' placeholder='Search posts' type='text'></input>
          </li>
        </ul>
        <ul className='ul-right'>
          <li className='li'>
            <p className='text text-hover'>Liked</p>
          </li>
          <li className='li'>
            <p className='text text-hover'>Friends</p>
          </li>
          <li className='li'>
            <p className='text text-hover'>Follow</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GreyNavbar;
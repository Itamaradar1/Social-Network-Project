import './postsNavbar.scss';
import logo from '../../assets/images/motion_logo.png';
import postsLogoGrey from '../../assets/svgs/posts_logo_grey.svg';
import postsLogo from '../../assets/svgs/posts_logo.svg';
import iconsFriendsGrey from '../../assets/svgs/icon-friends-grey.svg';
import iconsFriends from '../../assets/images/icon-friends.png';
import bell from '../../assets/svgs/notification_bell.svg';
import userPhoto from '../../assets/images/users/jennifer.png';
import menu from '../../assets/svgs/menu.svg';
import profileLogo from '../../assets/images/profile.png';
import logoutLogo from '../../assets/images/logout.png';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SendedRequest from '../sendedRequest/sendedRequest';
import ReceivedRequest from '../receivedRequest/receivedRequest';

const PostsNavBar = (props) => {
  const selector = reduxState => reduxState;
  const reduxState = useSelector(selector);   // reduxState
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [showLogoutMenu, toogleLogoutMenu] = useState(false);
  let [showNotificationMenu, toogleNotificationMenu] = useState(false);


  const handleLogoutClick = () => {
    toogleNotificationMenu(showNotificationMenu => { if (showNotificationMenu) showNotificationMenu = false });
    toogleLogoutMenu(showLogoutMenu => showLogoutMenu = !showLogoutMenu);
  }

  const handleNotificationClick = () => {
    toogleLogoutMenu(showLogoutMenu => { if (showLogoutMenu) showLogoutMenu = false; });
    toogleNotificationMenu(showNotificationMenu => showNotificationMenu = !showNotificationMenu);
  }

  const handlingMouseLeave = () => {
    toogleLogoutMenu(showLogoutMenu => { if (showLogoutMenu) showLogoutMenu = false; });
    toogleNotificationMenu(showNotificationMenu => { if (showNotificationMenu) showNotificationMenu = false });
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'clearReduxState', payload: null });
    console.log('reduxState after logging out: ', reduxState);
    navigate('/');
  }

  const handleProfile = () => {
    navigate('/profile');
  }

  return (
    <div className="postsNavBar">
      <div className='nav'>
        <ul className='ul-left'>
          <Link className='li' to='/'>
            <img className='motion-logo' src={logo}></img>
            <h1 className='h1'>Motion</h1>
          </Link>
          <Link className='li li-hover' to='/posts'>
            <img className='motion-logo' src={props.activePage === 'posts' ? postsLogo : postsLogoGrey}></img>
            <h2 className='h2'>Posts</h2>
          </Link>
          <Link className='li li-hover' to='/find-friends'>
            <img className='motion-logo' src={props.activePage === 'find-friends' ? iconsFriends : iconsFriendsGrey}></img>
            <h2 className='h2'>Find Friends</h2>
          </Link>
        </ul>
        <ul className='ul-right' onMouseLeave={handlingMouseLeave} >
          <div className={showNotificationMenu ? 'menu-notifications-extended' : 'menu-notifications-hidden'}>
            <ul>
              <li>
                <p>Received requests</p>
              </li>
              <li>
                <ReceivedRequest />
              </li>
              <li>
                <ReceivedRequest />
              </li>
              <li>
                <p>Send requests</p>
              </li>
              <li>
                <SendedRequest />
              </li>
              <li>
                <SendedRequest />
              </li>
            </ul>
          </div>
          <li className='li li-hover li-msgs' onClick={handleNotificationClick}>
            <img className='img-bell' src={bell}></img>
            <div className='msgs'>{reduxState.loggedUser.notifications}</div>
            <div className='msgs'>{15}</div>
          </li>
          <li className='li'>
            <img className='img-user' src={reduxState.loggedUser.photo}></img>
          </li>
          <li className='li li-hover li-menu' onClick={handleLogoutClick}>
            <img className='img-menu' src={menu}></img>
          </li>
          <div className={showLogoutMenu ? 'menu-logout-extended' : 'menu-logout-hidden'}>
            <ul className='logout-ul'>
              <li onClick={handleProfile}>
                <img src={profileLogo}></img>
                <p>Profile</p>
              </li>
              <li onClick={handleLogout}>
                <img src={logoutLogo}></img>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default PostsNavBar;
import photo1 from '../../assets/images/feedPics/nice-background.jpg';
import userPhoto from '../../assets/images/users/jennifer.png';
import './profile.scss';
import PostsNavBar from '../../components/postsNavbar/postsNavbar';
import Button_long from '../../components/buttons/Button_long';
import Button_short from '../../components/buttons/Button_short';
import Button_violet from '../../components/buttons/Button_violet';
import Button_white_extendable from '../../components/buttons/Button_white_extendable';
import UserInfo from '../../components/userInfo/userInfo';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoggedInUserData, fetchUpdateUserData } from '../../store/action';
import { useSelector } from 'react-redux';
import Hobby from '../../components/hobby';
import { fetchAndDispatchVerification } from './../../store/action';
import { fetchDeleteAccount } from '../../store/action';

const Profile = () => {
  const dispatch = useDispatch();               // dispatch function...
  const selector = reduxState => reduxState;
  const reduxState = useSelector(selector);   // reduxState

  const [showMenuUpdate, setMenuUpdate] = useState(false);
  const [first_name, setFirstName] = useState(reduxState.user['first_name']);
  const [email, setEmail] = useState(reduxState.user['email']);
  const [location, setLocation] = useState(reduxState.user['location']);
  const [about_me, setAboutMe] = useState(reduxState.user['about_me']);
  const [last_name, setLastName] = useState(reduxState.user['last_name']);
  const [username, setUsername] = useState(reduxState.user['username']);
  const [things_user_likes, setHobbies] = useState(reduxState.user['things_user_likes']);
  const [inputValue, setNewHobbyValue] = useState('');

  const deleteHobby = (label) => {
    console.log('In parent -> deleting hobby: ', label);
    const index = things_user_likes.indexOf(label);
    console.log('In parent -> index: ', index);
    let newHobbies = [...things_user_likes];
    newHobbies.splice(index, 1);

    setHobbies(things_user_likes => things_user_likes = [...newHobbies]);
  }

  const handleAddHobby = () => {
    console.log('adding new hobby...');

    setHobbies(things_user_likes => things_user_likes = [...things_user_likes, inputValue]);
    setNewHobbyValue(inputValue => inputValue = '');
  }

  const handleDelete = () => {
    dispatch((dispatch, getState) => fetchDeleteAccount(dispatch, getState));
  }

  const handleInputChange = (e) => {
    console.log('e.target.value ', e.target.value);
    setNewHobbyValue(inputValue => inputValue = e.target.value);
  }

  const handleMenuUpdate = () => {
    setMenuUpdate(showMenuUpdate => showMenuUpdate = !showMenuUpdate);
  }

  const handleChange = (e) => {
    if (e.target.name === 'first_name') setFirstName(first_name => first_name = e.target.value)
    if (e.target.name === 'email') setEmail(email => email = e.target.value)
    if (e.target.name === 'location') setLocation(location => location = e.target.value)
    if (e.target.name === 'about_me') setAboutMe(about_me => about_me = e.target.value)
    if (e.target.name === 'last_name') setLastName(last_name => last_name = e.target.value)
    if (e.target.name === 'username') setUsername(username => username = e.target.value)
  }

  const handleSave = () => {
    console.log('saving new properties...');
    const newUserData = {
      email,
      first_name,
      last_name,
      username,
      location,
      about_me,
      things_user_likes,
    }

    dispatch((dispatch, getState) => fetchUpdateUserData(dispatch, getState, newUserData));
  }

  const hideMenuUpdate = () => {
    setMenuUpdate(showMenuUpdate => {
      if (showMenuUpdate) showMenuUpdate = false;
    })
  }

  useEffect(() => {
    console.log('component "Profile" loaded or updated..');
    // fetching for user data based on saved token
    dispatch((dispatch, getState) => fetchLoggedInUserData(dispatch, getState));
  }, []);

  return (
    <div className='profile'>
      <PostsNavBar activePage='' />
      <div className='background-picture'>
      </div>
      <div className='form-container'>
        <div className='form'>
          <div className='col1' onMouseLeave={hideMenuUpdate}>
            <div className='upperPart'>
              <img src={userPhoto}></img>
              <Button_long button_name={'update image'} handleClick={handleMenuUpdate} />
            </div>
            <div className={showMenuUpdate ? 'menu-update' : 'menu-update-hidden'}>
              <ul>
                <li>
                  <svg
                    id="Layer_1"
                    enableBackground="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    fill="#AAAAAA"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m512 480c0 17.673-14.327 32-32 32h-448c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.326 32 32zm-369.377-302.622c8.189 0 16.379-3.124 22.627-9.373l58.75-58.75v246.746c0 17.673 14.327 32 32 32s32-14.327 32-32v-246.746l58.75 58.75c12.497 12.497 32.758 12.497 45.255 0s12.497-32.758 0-45.255l-113.378-113.377c-12.497-12.497-32.758-12.497-45.255 0l-113.377 113.377c-12.497 12.497-12.497 32.758 0 45.255 6.249 6.249 14.438 9.373 22.628 9.373z" />
                  </svg>
                  <p>Upload</p>
                </li>
                <li>
                  <svg
                    id="Layer_1"
                    enableBackground="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    fill="#AAAAAA"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m414.59 152h-317.18c-.327 3.899-1.505-16.923 21.46 327.57 1.21 18.18 16.44 32.43 34.67 32.43h204.92c18.23 0 33.46-14.25 34.67-32.43 22.985-344.79 21.78-323.75 21.46-327.57zm-221.2 295.94c-8.882.756-16.564-5.803-17.33-14.55l-16-184c-.77-8.81 5.75-16.56 14.55-17.33 8.8-.76 16.56 5.75 17.33 14.55l16 184c.77 8.81-5.75 16.56-14.55 17.33zm78.61-15.94c0 8.84-7.16 16-16 16s-16-7.16-16-16v-184c0-8.84 7.16-16 16-16s16 7.16 16 16zm79.94-182.61-16 184c-.72 8.33-7.71 14.61-15.92 14.61-9.455 0-16.773-8.083-15.96-17.39l16-184c.77-8.8 8.52-15.31 17.33-14.55 8.8.77 15.32 8.52 14.55 17.33zm69.31-193.39h-77.37c.162-2.105.12-.532.12-21.25 0-19.16-15.59-34.75-34.75-34.75h-106.5c-19.16 0-34.75 15.59-34.75 34.75 0 20.318-.043 19.137.12 21.25h-77.37c-19.16 0-34.75 15.59-34.75 34.75 0 28.583-.045 27.228.11 29.25h399.78c.157-2.053.11-.832.11-29.25 0-19.16-15.59-34.75-34.75-34.75zm-109.25-2.75c0 1.52-1.23 2.75-2.75 2.75h-106.5c-1.52 0-2.75-1.23-2.75-2.75v-18.5c0-1.52 1.23-2.75 2.75-2.75h106.5c1.52 0 2.75 1.23 2.75 2.75z" /></svg>
                  <p>Remove</p>
                </li>
              </ul>
            </div>
            <div className='lowerPart'>
              <Button_white_extendable button_name={'delete account'} handleClick={handleDelete} />
              <Button_violet button_name={'save'} handleClick={handleSave} />
            </div>
          </div>
          <div className='col2'>
            <UserInfo label={'First name'} userKey={'first_name'} handleChange={handleChange} value={first_name} />
            <UserInfo label={'Email'} userKey={'email'} handleChange={handleChange} value={email} />
            <UserInfo label={'Location'} userKey={'location'} handleChange={handleChange} value={location} />
            <UserInfo label={'About'} userKey={'about_me'} handleChange={handleChange} value={about_me} />
          </div>
          <div className='col3'>
            <UserInfo label={'Last name'} userKey={'last_name'} handleChange={handleChange} value={last_name} />
            <UserInfo label={'Username'} userKey={'username'} handleChange={handleChange} value={username} />
            {/* <UserInfo label={'Phone'} /> */}
            {/* <UserInfo label={'Password'} /> */}
          </div>
          <div className='hobbies'>
            <p className='label'>Things I like</p>
            {/*<div className='list-of-hobbies'>*/}
            {/*  {things_user_likes.map((hobby) => {*/}
            {/*    return <Hobby label={hobby} deleteHobby={deleteHobby} />*/}
            {/*  })}*/}
            {/*</div>*/}
            <div className='add-new-hobby'>
              <input className='new-hobby' value={inputValue} onChange={handleInputChange} ></input>
              <Button_long button_name={'add'} handleClick={handleAddHobby} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
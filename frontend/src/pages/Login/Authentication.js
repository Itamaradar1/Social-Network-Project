import { useState } from 'react'
import '../Login/Login.scss'
import { fetchAndDispatchVerification } from '../../store/action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import image1 from '../../assets/svgs/twitter_icon.svg'
import image2 from '../../assets/svgs/facebook_icon.svg'
import image3 from '../../assets/svgs/instagram_icon.svg'
import image4 from '../../assets/images/logo_white.png'
import image5 from '../../assets/svgs/apple.svg'
import image6 from '../../assets/svgs/google.svg'



const Authentication = () => {

  const selector = reduxState => reduxState.token
  // const token = useSelector(selector)  
  // const token = localStorage.getItem('token')


//   if (token) {
//     console.log('Logged in token ...')
//   }

// // 
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [password_repeat, setPasswordRepeat] = useState('');


  const clickHandler = () => {

    dispatch((dispatch, getState) => fetchAndDispatchVerification(dispatch, getState,code, email, username, first_name, last_name, password, password_repeat, navigate))

  }


  return (

    <>
      <div className='Login-main'>

        <div className="left-container">
          <div className="logo_container">
            <img className='motion_logo' src={image4}></img></div>
          <h1>Motion</h1>
          <p>
            Connect with friends and the world around you with Motion.
          </p >
          <div className="app">
            <button className='app_logo'><img src={image5}></img></button>
            <button className='google_logo'><img src={image6}></img></button>
          </div>
          <div className="footer">
            <div ><img className="twitter" src={image1} ></img></div>
            <div className="facebook-f"><img src={image2} ></img></div>
            <div className="instagram"><img src={image3}></img></div>
          </div>
          <div className="footer_message">
            <p>© Motion 2018.All rights reserved.</p>
          </div>
        </div>
        <div className="right-container">

          <div className="Sign_in">
            <h2>Verification</h2>
          </div>
          
          
           <div className="input_container_verification">

            <div className='validation_code'>
              <input className='myCode' type='code' placeholder='Validation code' value={code} onChange={e => setCode(e.target.value)}></input>
            </div>
            <div className='email_container_verification'>
              <input className='myEmail_verification' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='username_container_verification'>
              <input className='myUsername_verification' type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className='firstName_container'>
              <input className='myFirstName' type='text' placeholder='First name' value={first_name} onChange={e => setFirstName(e.target.value)}></input>
            </div>
            <div className='lastName_container'>
              <input className='myLastName' type='text' placeholder='Last name' value={last_name} onChange={e => setLastName(e.target.value)}></input>
            </div>
            <div className='password_verification'>
              <input className='myPassword_verification' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className='passwordRepet_container'>
              <input className='myPasswordRepeat' type='password' placeholder='Password repeat' value={password_repeat} onChange={e => setPasswordRepeat(e.target.value)}></input>
            </div>

            

        </div>

          <div className='myButtons_container_verification'>
            <button className='myButtons'  onClick={clickHandler}> Complete </button>
          </div>

        </div>

      </div>

    </>
  )
}


export default Authentication

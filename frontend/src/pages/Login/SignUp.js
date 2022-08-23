import { useState } from 'react'
import '../Login/Login.scss'
import { fetchAndDispatchCode } from '../../store/action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image1 from '../../assets/svgs/twitter_icon.svg'
import image2 from '../../assets/svgs/facebook_icon.svg'
import image3 from '../../assets/svgs/instagram_icon.svg'
import image4 from '../../assets/images/logo_white.png'
import image5 from '../../assets/svgs/apple.svg'
import image6 from '../../assets/svgs/google.svg'
import image7 from '../../assets/svgs/avatar.svg'



const SignUp = () => {

  const selector = reduxState => reduxState.token
  // const token = useSelector(selector)  
  // const token = localStorage.getItem('token')


  // if (token) {
  //   console.log('Logged in ...')
  // }


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [email, setEmail] = useState('');


  const clickHandler = () => {

    dispatch((dispatch, getState) => fetchAndDispatchCode(dispatch, getState, email, navigate))

  }

  const clickHandlerSignIn = () => {

    navigate('/')
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

          <div className="Sign_Up_container">
            <div className="header_message">Already have an account ?</div>
            <div><button className="Sign_Up"onClick={clickHandlerSignIn} >Sign in</button> </div>
          </div>

          <div className="Sign_in">
            <h2>Sign Up</h2>
          </div>
          <div className="input_container">
            <div className='email_container'>
              <img className='avatar' src={image7}></img>
              <input className='myEmail' type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
    
          </div>

          <div className='myButtons_container'>
            <button className='myButtons'  onClick={clickHandler}> Sign Up  </button>
          </div>

        </div>

      </div>

    </>
  )
}


export default SignUp

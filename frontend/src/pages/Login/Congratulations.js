import '../Login/Login.scss'
import { useNavigate } from 'react-router-dom'
import image1 from '../../assets/svgs/twitter_icon.svg'
import image2 from '../../assets/svgs/facebook_icon.svg'
import image3 from '../../assets/svgs/instagram_icon.svg'
import image4 from '../../assets/images/logo_white.png'
import image5 from '../../assets/svgs/apple.svg'
import image6 from '../../assets/svgs/google.svg'
import image7 from '../../assets/svgs/checkmark.svg'





const Congratulations = () => {

 

  const navigate = useNavigate()

  const clickHandler = () => {

    navigate('/authentication')

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

          <div className='congratsOk'>
            <div className="congrats"><h2>Congratulations</h2></div>
            <div className="ok"><img  src={image7} ></img></div>
          </div>
            <div className='message'> We've sent a conifmation code to your email !</div>

            <button className='continue_button' onClick={clickHandler}> Continue  </button>
          </div>

         </div>

    </>
  )
}


export default Congratulations
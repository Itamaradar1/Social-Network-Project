import image1 from '../../../assets/svgs/twitter_icon.svg'
import image2 from '../../../assets/svgs/facebook_icon.svg'
import image3 from '../../../assets/svgs/instagram_icon.svg'
import image4 from '../../../assets/images/logo_white.png'
import image5 from '../../../assets/svgs/apple.svg'
import image6 from '../../../assets/svgs/google.svg'
import './Left_container.scss'

function leftContainer(){

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

}


export default leftContainer
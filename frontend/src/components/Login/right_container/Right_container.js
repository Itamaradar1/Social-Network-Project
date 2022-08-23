import { useState } from 'react'
import { fetchAndDispatchToken } from '../../../store/action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image7 from '../../../assets/svgs/avatar.svg'
import image8 from '../../../assets/svgs/password.svg'
import './Right_container.scss'


const RightContainer =()=>{

  const selector = reduxState => reduxState.token
  // const token = useSelector(selector)  
  const token = localStorage.getItem('token')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  

  const [email, setEmail] = useState('inori.mu@gmail.com');
  const [password, setPassword] = useState('inorimu90');

  const clickHandler = () => {

    dispatch((dispatch, getState) => fetchAndDispatchToken(dispatch, getState, email, password, navigate))

  }


  return(

<>
    
  </>
  )

}


export default RightContainer
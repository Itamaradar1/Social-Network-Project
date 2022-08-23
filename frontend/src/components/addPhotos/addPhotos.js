import './addPhotos.scss';
import { useDispatch, useSelector } from 'react-redux';

const AddPhotos = () => {

  const dispatch = useDispatch();
  const selector = reduxState => reduxState;
  const reduxState = useSelector(selector);   // reduxState

  return (
    <div className="AddPhotos">
      <img className='userPhoto' src={reduxState.loggedUser.photo}></img>
      {/* <div className='background'></div> */}
      {/* <h1>some text</h1> */}
    </div>
  );
}

export default AddPhotos;
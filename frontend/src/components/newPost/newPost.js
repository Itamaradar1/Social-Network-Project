import './newPost.scss';
import userPhoto from '../../assets/images/users/jennifer.png';
import btnSend from '../../assets/svgs/send_button.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import photo1 from '../../assets/images/feedPics/image1.png';

const NewPost = (props) => {
  const dispatch = useDispatch();
  const selector = reduxState => reduxState;
  const reduxState = useSelector(selector);   // reduxState

  let [text, handleChange] = useState('');
  let [extended, clickExtend] = useState(false);
  let [pictures, addPicture] = useState([]);

  let welcomeMsg = `What's on your mind, ${reduxState.user.first_name}?`

  const addNewPost = () => {
    let post = {
      time: 'Just Now',
      text: text,
      images: [...pictures],
      nrOfLikes: 0,
    }

    dispatch({
      type: 'addNewPost',
      payload: post,
    })

    handleChange(text => text = '');
    clickExtend(extended => extended = !extended);
    props.toogleModal();
  }

  const extendNewPost = () => {
    console.log('extending new post...');
    // extended = !extended;
    clickExtend(extended => extended = !extended)

    props.toogleModal();
  }

  const onChangeFileHandler = (e) => {
    let selectedPictures = [];

    console.log('e.target.files.length ', e.target.files.length);

    for (let i = 0; i < e.target.files.length; i++) {
      selectedPictures.push(URL.createObjectURL(e.target.files[i]));
    }

    addPicture(pictures => pictures = selectedPictures);
  }

  return (
    <div className='newPost'>
      <div className='header'>
        <div className='left-header'>
          <img className='userPhoto' src={reduxState.loggedUser.photo}></img>
          <input
            className='on-your-mind'
            placeholder={welcomeMsg}
            type='text'
            onChange={(e) => handleChange(text => text = e.target.value)}
            value={text}
          ></input>
        </div>
        <div className={extended ? 'post-hidden' : 'post'} onClick={extendNewPost}>
          <img
            className='btn-send'
            src={btnSend}
          ></img>
        </div>
      </div>
      <div className={extended ? 'footer' : 'footer-hidden'}>
        <div className='pictures'>
          {pictures.map((picture) => {
            return <img
              key={Math.random() * 100000}
              className={'img'}
              src={picture}></img>
          })}
          {/* <img className={pictures !== null ? 'img' : 'img-hidden'} src={pictures !== null ? pictures : photo1}></img> */}
        </div>
        <div className={'footer-extended'}>
          <div className='left'>
            <input className='file' id='file' type='file' name='file' onChange={onChangeFileHandler} multiple />
            {/* <img className='img' src="https://img.icons8.com/material/24/000000/image.png" /> */}
            {/* <img className='img' src="https://img.icons8.com/fluency-systems-regular/48/000000/chain.png" /> */}
          </div>
          <div className='right'>
            <div className='post' onClick={addNewPost}>
              <img className='btn-send' src={btnSend} ></img>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NewPost;
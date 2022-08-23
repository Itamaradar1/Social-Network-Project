import './post.scss';
import userPhoto from '../../assets/images/users/jennifer.png';
import heart from '../../assets/svgs/heart.svg';
import share from '../../assets/svgs/share.svg';
import menu from '../../assets/svgs/menu.svg';
import photo1 from '../../assets/images/feedPics/image1.png';
import photo2 from '../../assets/images/feedPics/image2.png';
import photo3 from '../../assets/images/feedPics/image3.png';
import photo4 from '../../assets/images/feedPics/image4.png';

const Post = (props) => {
  return (
    <div className={props.editable ? 'post post-with-borders' : 'post'}>
      <div className='row'>
        <div className='left'>
          <img className='userPhoto' src={props.loggedUser.photo}></img>
          <div className='signature'>
            <p className='author'>{props.loggedUser.firstName} {props.loggedUser.lastName}</p>
            <p className='time'>{props.post.time}</p>
          </div>
        </div>
        <div className='right'>
          <img className={props.editable ? 'img' : 'img-hidden'} src={menu}></img>
        </div>
      </div>
      <div className='row'>
        <p className='text'>
          {props.post.text}
        </p>
      </div>
      <div className='gallery'>
        {props.post.images.map((image) => {
          return <img
            key={Math.random() * 100000}
            className='img'
            src={image}
          ></img>;
        })}
      </div>
      <div className={props.editable ? 'row-actions' : 'row-actions-hidden'}>
        <div className='left'>
          <img src={heart}></img>
          <p className='action'>Like</p>
          <img src={share}></img>
          <p className='action'>Share</p>
        </div>
        <div className='right'>
          <p className='likes'>{props.post.nrOfLikes} Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
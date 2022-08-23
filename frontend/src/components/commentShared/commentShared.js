import './commentShared.scss'
import userPhoto from '../../assets/images/users/jennifer.png';
import heart from '../../assets/svgs/heart.svg';
import share from '../../assets/svgs/share.svg';
import menu from '../../assets/svgs/menu.svg';
import photo1 from '../../assets/images/feedPics/image1.png';
import photo2 from '../../assets/images/feedPics/image2.png';
import photo3 from '../../assets/images/feedPics/image3.png';
import photo4 from '../../assets/images/feedPics/image4.png';
import CommentPosted from '../post/post';

const CommentShared = () => {
  return (
    <div className="sharedComment">
      <div className='row'>
        <div className='left'>
          <img className='userPhoto' src={userPhoto}></img>
          <div className='signature'>
            <p className='author'>Jennifer Smith</p>
            <p className='time'>Just Now</p>
          </div>
          <div className='signature'>
            <p className='time'>shared a post</p>
            <p className='time'></p>
          </div>
        </div>
        <div className='right'>
          <img src={menu}></img>
        </div>
      </div>
      <div className='row'>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vero et consequuntur temporibus impedit voluptatum,
          suscipit, ...
        </p>
      </div>
      <div className='shared-post'>
        <CommentPosted editable={false} />
      </div>
      <div className='row-actions'>
        <div className='left'>
          <img src={heart}></img>
          <p className='action'>Like</p>
          <img src={share}></img>
          <p className='action'>Share</p>
        </div>
        <div className='right'>
          <p className='likes'>2 Likes</p>
        </div>
      </div>
    </div>
  );
}

export default CommentShared;
import './board.scss';
import NewPost from '../newPost/newPost';
import Post from '../post/post';
import CommentShared from '../commentShared/commentShared';
import { useSelector, useDispatch } from 'react-redux';
import AddPhotos from '../addPhotos/addPhotos';

const Board = (props) => {
  const dispatch = useDispatch();
  const selector = reduxState => reduxState;
  const reduxState = useSelector(selector);   // reduxState


  return (
    <div className='background'>
      <div className="board">
        <div className='left'>
          <NewPost toogleModal={props.toogleModal} />
          {reduxState.loggedUser.posts.map((post) => {
            return <Post
              key={Math.random() * 100000}
              editable={true}
              post={post}
              loggedUser={reduxState.loggedUser}
            />;
          })}
        </div>
        <div className='right'>
          {/* <CommentShared /> */}
          {reduxState.loggedUser.posts.map((post) => {
            return <Post
              key={Math.random() * 100000}
              editable={true}
              post={post}
              loggedUser={reduxState.loggedUser}
            />;
          })}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Board;
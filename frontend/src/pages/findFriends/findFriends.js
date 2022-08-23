import "./findFriends.scss";
// import FindFriends from '../../components/postsNavbar/postsNavbar';
import PostsNavBar from "../../components/postsNavbar/postsNavbar";
import Cardboard from "../../components/Cardboard/Cardboard";

const FindFriends = () => {
  return (
    <div className="find-friends">
      <PostsNavBar activePage="find-friends" />

      <Cardboard />
    </div>
  );
};

export default FindFriends;

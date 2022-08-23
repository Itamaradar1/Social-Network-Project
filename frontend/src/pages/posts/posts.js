import React from "react";
import PostsNavBar from "../../components/postsNavbar/postsNavbar";
import GreyNavbar from "../../components/greyNavbar/greyNavbar";
import Board from "../../components/board/board";
import AddPhotos from '../../components/addPhotos/addPhotos';
import './posts.scss';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLoggedInUserData } from "../../store/action";

const Posts = () => {
  let [modalActive, clickExtend] = useState(false);

  const dispatch = useDispatch();

  const toogleModal = () => {
    clickExtend((modalActive) => modalActive = !modalActive);
  }

  useEffect(() => {
    dispatch((dispatch, getState) => fetchLoggedInUserData(dispatch, getState));
  }, []);

  return (
    <div className="posts">
      <div className={modalActive ? "modal-background" : "modal-background-hidden"}>
      </div>
      <PostsNavBar activePage='posts' />
      <GreyNavbar />
      <Board toogleModal={toogleModal} />
    </div>
  );
}

export default Posts;


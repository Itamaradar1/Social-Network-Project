import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login/Login.js";
import SingUp from "./pages/Login/SignUp";
import Congratulations from "./pages/Login/Congratulations";
import Authentication from "./pages/Login/Authentication";
import Posts from "./pages/posts/posts";
import Profile from "./pages/profile/profile";
import FindFriends from "./pages/findFriends/findFriends";
// components
import Board from "./components/board/board";
import CommentPosted from "./components/post/post";
import GreyNavbar from "./components/greyNavbar/greyNavbar";
import PostsNavBar from "./components/postsNavbar/postsNavbar";
import Cardboard from "./components/Cardboard/Cardboard.js";
import Mask from "./components/Mask/Mask";
import Card from "./components/Card/Card";
import SendedRequest from "./components/sendedRequest/sendedRequest";
import ReceivedRequest from "./components/receivedRequest/receivedRequest";
import SignUp from "./pages/Login/SignUp";
import UserInfo from "./components/userInfo/userInfo";
import WAuth from "./components/WAuth"

const AuthenticatedProfile = WAuth(Profile)
const AuthenticatedFindFriends = WAuth(FindFriends)
const AuthenticatedPosts = WAuth(Posts)
const AuthenticatedCommentPosted = WAuth(CommentPosted)
const AuthenticatedGreyNavbar = WAuth(GreyNavbar)
const AuthenticatedPostNavBar = WAuth(PostsNavBar)
const AuthenticatedSendedRequest = WAuth(SendedRequest)
const AuthenticatedReceivedRequest = WAuth(ReceivedRequest)
const AuthenticatedMask = WAuth(Mask)
const AuthenticatedUserInfo = WAuth(UserInfo)
const AuthenticatedBoard = WAuth(Board)
const AuthenticatedCard = WAuth(Card)



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/posts" element={<AuthenticatedPosts />} />
        <Route path="/find-friends" element={<AuthenticatedFindFriends />} />
        <Route path="/profile" element={<AuthenticatedProfile />} />
        <Route path="/board" element={<AuthenticatedBoard />} />
        <Route path="/commentPosted" element={< AuthenticatedCommentPosted />} />
        <Route path="/greyNavbar" element={<AuthenticatedGreyNavbar />} />
        <Route path="/postnavbar" element={<AuthenticatedPostNavBar />} />
        <Route path="/Card" element={<AuthenticatedCard />} />
        <Route path="/sended-request" element={< AuthenticatedSendedRequest />} />
        <Route path="/received-request" element={<AuthenticatedReceivedRequest />} />
        <Route path="/Mask" element={<AuthenticatedMask />} />
        <Route path="/UserInfo" element={<AuthenticatedUserInfo />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

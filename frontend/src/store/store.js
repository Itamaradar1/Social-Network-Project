import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userJeniffer from "../assets/images/users/jennifer.png";
import userLeticia from "../assets/images/users/leticia.png";
import photo1 from "../assets/images/feedPics/image1.png";
import photo2 from "../assets/images/feedPics/image2.png";
import photo3 from "../assets/images/feedPics/image3.png";
import photo4 from "../assets/images/feedPics/image4.png";

let reduxState = {
  text: "hello world!",
  // userdata - temporary - hardcoded user for testing and styling:
  loggedUser: {
    firstName: "Leticia",
    lastName: "Smith",
    email: "jennifersmith@gmail.com",
    username: "jennifer.smith",
    city: "Zürich",
    country: "Switzerland",
    photo: userLeticia,
    notifications: 15,
    posts: [
      {
        time: "Just Now",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis ad autem dolore hic delectus soluta doloribus. Accusantium, commodi sapiente?",
        images: [photo1, photo2, photo3, photo4],
        nrOfLikes: 3,
      },
      {
        time: "Just Now",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis ad autem dolore hic delectus soluta doloribus. Accusantium, commodi sapiente?",
        images: [photo1, photo2],
        nrOfLikes: 6,
      },
      {
        time: "1 Hour ago",
        text: "very nice picture",
        images: [photo3],
        nrOfLikes: 15,
      },
    ],
    nextPostText: "",
  },
  // user data from API
  user: {
    id: undefined,
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    job: "",
    avatar: null,
    banner: null,
    location: "",
    about_me: "",
    things_user_likes: [],
    logged_in_user_is_following: undefined,
    logged_in_user_is_friends: undefined,
    logged_in_user_is_rejected: undefined,
    logged_in_user_received_fr: undefined,
    logged_in_user_sent_fr: undefined,
    amount_of_posts: undefined,
    amount_of_likes: undefined,
    amount_of_friends: undefined,
    amount_of_followers: undefined,
    amount_following: undefined
  }
};

const reducer = (state = reduxState, action) => {
  let newState = { ...state };
  // console.log('inside store...newState:', newState);

  if (action.type === "modifyText") {
  }
  if (action.type === "setToken") {
    const newUserData = { ...action.payload };

    localStorage.setItem("token", newUserData.access);
    newState.user = { ...newUserData.user };
    return newState;
  }
  if (action.type === "setUserInfo") {
    const newUserData = { ...action.payload };
    newState.user = { ...newUserData };
    return newState;
  }
  if (action.type === "addNewPost") {
    let newPosts = [action.payload, ...newState.loggedUser.posts];

    newState.loggedUser.posts = newPosts;
    return newState;
  }

  if (action.type === "addNotification") {
    // let newNotifications = newState.loggedUser.notifications;
    // newNotifications = newNotifications + 1;
  } else {
    return newState;
  }
};

const ftechUserReducer = (state = reduxState, action) => {
  let newState = { ...state };

  if (action.type === "fetchUser") {
    const myAction = [...action.payload];
    newState.friend = myAction;

    return newState;
  }
};

//3. create and apply middleware

const middlewares = applyMiddleware(thunk);

//4. create and export the store

export const store = createStore(reducer, middlewares);

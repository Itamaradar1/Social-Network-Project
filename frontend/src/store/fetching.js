import { useDispatch } from "react-redux";

export const FetchUsers = () => {
  const dispatch = useDispatch();
  const url = "https://motion.propulsion-home.ch/backend/api/users/";
  const method = "GET";
  const headers = new Headers({
    "Content-type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  });
  const config = { method, headers };

  fetch(url, config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.map((friend) => {
        if (friend.first_name === true) {
          // console.log(friend);
          // dispatch({ type: "fetchUser", payload: friend });
        }
      });

      // console.log(data);
      // switch (action.type) {
      //   case "fetchUser":
      //     const UsersFetchingFilter = data.results.filter(
      //       (data) => data.first_name.length > 0
      //     ){

      //     }

      //     props.dispatch({ type: "fetchUser", payload: dataFilteredByLikes });
      //     break;
      //   default:
      //     props.dispatch({ type: "fetchUser", payload: data.results });
      // }
    });
};

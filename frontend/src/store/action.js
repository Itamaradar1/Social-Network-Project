export const fetchAndDispatchToken = (dispatch, getState, email, password, navigate) => {
    const url = "https://motion-team3.propulsion-learn.ch/backend/api/auth/token/";
    const method = "POST";
    const headers = new Headers({ 'Content-type': 'application/json' });
    let body = { email, password };
    body = JSON.stringify(body);
    const config = { method, headers, body }
    fetch(url, config)
        .then(response => response.json())
        .then(data => {
            console.log('POST: /auth/token/ => data: ', data);
            // if (!data.access) alert('Error: ', data);

            if (data.access) {
                // localStorage.setItem("token", data.access);
                dispatch({ type: "setToken", payload: data });
                navigate("/profile");
            }
        })
        .catch(reject => console.log('something went wrong while loggin in ..', reject));
}
export const fetchAndDispatchCode = (dispatch, getState, email, navigate) => {
    const url = "https://motion-team3.propulsion-learn.ch/backend/api/auth/registration/";
    const method = "POST";
    const headers = new Headers({ 'Content-type': 'application/json' });
    let body = { email };
    body = JSON.stringify(body);
    const config = { method, headers, body }
    fetch(url, config)
        .then((response) => {
            if (response.status === 201) {
                navigate("/congratulations")
            } else {
                throw `error with status ${response.status}`;
            }
        });
}

export const fetchAndDispatchVerification = (dispatch, getState, code, email, username, first_name, last_name, password, password_repeat, navigate) => {
    const url = "https://motion-team3.propulsion-learn.ch/backend/api/auth/registration/validation/";
    const method = "PATCH";
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
    let body = { code, email, first_name, last_name, password, password_repeat, username };
    body = JSON.stringify(body);
    const config = { method, headers, body }
    fetch(url, config)
        .then((response) => {
            if (response.status === 200) {
                navigate("/")
            } else {
                throw `error with status ${response.status}`;
            }
        })
};

export const fetchLoggedInUserData = (dispatch, getState) => {
    const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';
    const method = 'GET';
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': bearer });
    const config = { method, headers };
    fetch(url, config)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'setUserInfo',
                payload: data,
            })
        })
        .catch(reject => console.log('something went wrong.. ', reject));
};

export const fetchUpdateUserData = (dispatch, getState, newUserData) => {
    const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';
    const method = 'PATCH';
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': bearer });
    let body = {
        email: newUserData.email,
        first_name: newUserData.first_name,
        last_name: newUserData.last_name,
        username: newUserData.username,
        location: newUserData.location,
        about_me: newUserData.about_me,
        things_user_likes: [...newUserData.things_user_likes],
    }
    body = JSON.stringify(body);
    const config = { method, headers, body };
    fetch(url, config)
        .then((response) => response.json())
        .then((data) => {
            console.log('data: ', data)
        })
        .catch(reject => console.log('something went wrong.. ', reject));
}

export const fetchDeleteAccount = (dispatch, getState) => {
    const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';
    const method = 'DELETE';
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': bearer });
    const config = { method, headers };
    fetch(url, config)
        .then((response) => console.log('fetchDeleteAccount: ', response))
        .catch(reject => console.log('something went wrong.. ', reject));
}

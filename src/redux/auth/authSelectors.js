const getIsLogIn = state => state.auth.isLogIn;

const getUserEmail = state => state.auth.email;

const authSelectors = {
    getIsLogIn,
    getUserEmail
}

export default authSelectors;

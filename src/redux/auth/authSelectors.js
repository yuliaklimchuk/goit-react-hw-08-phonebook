const getIsLogIn = state => state.auth.isLogIn;

const getUserName = state => state.auth.user.name;

const authSelectors = {
    getIsLogIn,
    getUserName
}

export default authSelectors;

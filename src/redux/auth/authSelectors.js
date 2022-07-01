const getIsLogIn = state => state.auth.isLogIn;

const getUserName = state => state.auth.user.name;

const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
    getIsLogIn,
    getUserName,
    getIsRefreshing
}

export default authSelectors;

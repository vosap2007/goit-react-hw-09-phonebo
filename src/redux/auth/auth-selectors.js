const getIsAuthenticated = state => state.auth.isAuthenticated;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

export default {
    getIsAuthenticated,
  getUsername,
    getIsLoggedIn,
};
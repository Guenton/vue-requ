// Handle Error Message when redirected to login page
const isAuthenticated = () => {
  if (sessionStorage.getItem("auth")) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
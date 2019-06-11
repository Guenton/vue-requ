const loginResHandler = res => {
  let returnObj = {}
  if (res.err) {
    returnObj.valid = false;
    returnObj.msg = `*Server Response: ${res.err}`;
  } else {
    returnObj.valid = true;
    sessionStorage.setItem("lastname", res.name);
    sessionStorage.setItem("jwt", res.jwt);
  }
  return returnObj;
}

export default loginResHandler;
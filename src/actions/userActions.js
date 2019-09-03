export const login = (userName, userPwd) => {
  return {
    type: "LOGIN",
    userName,
    userPwd
  };
};

export const register = (userName, userPwd, rePwd) => ({
  type: "REGISTER",
  userName,
  userPwd,
  rePwd
});

export const getPosts = () => ({
  type: "GET_POSTS"
});

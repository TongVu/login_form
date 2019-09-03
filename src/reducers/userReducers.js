var id = 0;

const userReducers = (state = [], action) => {
  switch (action.type) {
    //---------------------------------------------------------------------//
    //----- Nếu password đăng kí nhập lại đúng thì cập nhật userList------//
    //-------------------------------------------------------------------//
    case "REGISTER": {
      var registerStatus = true;
      state.forEach(user => {
        if (user.name === action.userName) {
          registerStatus = false;
          return registerStatus;
        }
      });
      if (action.userPwd === action.rePwd && registerStatus === true) {
        return [
          ...state,
          {
            id: id++,
            name: action.userName,
            pwd: action.userPwd,
            logIn: false
          }
        ];
      } else return state;
    }

    //----------------------------------------------------------------------------//
    //-- Nếu name === input name và password === input password thì login true --//
    //--------------------------------------------------------------------------//
    case "LOGIN": {
      state.filter(instant => {
        if (instant.name === action.userName && instant.pwd === action.userPwd)
          return (instant.logIn = true);
      });
      return state;
    }

    default:
      return state;
  }
};

export default userReducers;

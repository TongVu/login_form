import React from "react";
import { Input, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./scss/login.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { login } from "../actions/userActions";

let margin = {
  margin: "5px 0"
};

class LoginPage extends React.Component {
  redirectToUser = () => {
    const { history } = this.props;
    if (history) history.push("/user");
  };

  render() {
    const { users, login, history } = this.props;

    let inputName = "";
    let inputPwd = "";
    var user = [
      {
        name: "",
        pwd: "",
        logIn: false
      }
    ];

    return (
      <div className="login-container">
        <h3>Entry Task | Login Form</h3>

        <Input
          placeholder="userName"
          style={margin}
          onKeyUp={e => (inputName = e.target.value)}
        />

        <Input.Password
          placeholder="input password"
          style={margin}
          onKeyUp={e => (inputPwd = e.target.value)}
        />

        <Button
          type="primary"
          style={margin}
          onClick={e => {
            e.preventDefault();
            login(inputName, inputPwd);

            //------------------------------------------------------------------------//
            //---------- TÌM User name vừa nhập trong user list ----------------------//
            //------------------------------------------------------------------------//
            user = users.filter(user => user.name === inputName);

            //------------------------------------------------------------------------//
            //---------- Kết quả từ hàm lgin kiểm tra đúng thì chuyển trang ----------//
            //------------------------------------------------------------------------//
            history && user[0].logIn
              ? this.redirectToUser()
              : console.log("FAILED from USER LOG IN");
          }}
        >
          LOG IN
        </Button>
        <Link to="/register">Or Register</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducers
});

const mapDispatchToProps = dispatch => ({
  login: (name, pwd) => dispatch(login(name, pwd))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginPage);

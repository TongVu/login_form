import React from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./scss/login.css";
import { connect } from "react-redux";
import { login } from "../actions/userActions";

let margin = {
  margin: "5px 0"
};

const LoginPage = ({ users, login }) => {
  let inputName = "";
  let inputPwd = "";

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
        }}
      >
        <Link to="/user">LOG IN</Link>
      </Button>
      <Link to="/register">Or Register</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.userReducers
});

const mapDispatchToProps = dispatch => ({
  login: (name, pwd) => dispatch(login(name, pwd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

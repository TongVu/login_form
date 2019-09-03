import React from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./scss/register.css";
import { connect } from "react-redux";
import { register } from "../actions/userActions";

let margin = {
  margin: "5px 0"
};

const RegisterPage = ({ dispatch }) => {
  let inputUserName;
  let inputUserPwd;
  let inputRePwd;
  return (
    <div className="register-container">
      <h3>Register</h3>

      <Input
        placeholder="Enter User Name"
        style={margin}
        onKeyUp={e => (inputUserName = e.target.value)}
      />
      <Input.Password
        placeholder="Enter password"
        style={margin}
        onKeyUp={e => (inputUserPwd = e.target.value)}
      />
      <Input.Password
        placeholder="Confirm password"
        style={margin}
        onKeyUp={e => (inputRePwd = e.target.value)}
      />
      <Link to="/">
        <Button
          type="primary"
          style={margin}
          onClick={e => {
            dispatch(register(inputUserName, inputUserPwd, inputRePwd));
          }}
        >
          DONE
        </Button>
      </Link>
    </div>
  );
};

export default connect()(RegisterPage);

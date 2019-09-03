import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { getPosts } from "../actions/userActions";

const UserPage = ({ dispatch }) => {
  return (
    <div className="user-page-container">
      <Button type="primary" onClick={e => dispatch(getPosts())}>
        Get Posts
      </Button>
    </div>
  );
};

export default connect()(UserPage);

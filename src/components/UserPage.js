import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { getPosts } from "../actions/userActions";
import Post from "./Post";

class UserPage extends React.Component {
  render() {
    const { posts, getPosts } = this.props;

    return (
      <div className="user-page-container">
        <Button
          type="primary"
          onClick={e => {
            getPosts();
          }}
        >
          Fetch Post
        </Button>

        {(posts || []).map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts.posts
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

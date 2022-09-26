import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import PostList from "../components/PostList";

class App extends Component {
  handleClick = () => {
    this.props.fetchPosts();
  };
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
        {this.props.loading && "Loading..."}
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading
});
const mapDispatchToProps = { fetchPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

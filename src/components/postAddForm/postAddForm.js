import React, { Component } from "react";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex" action="">
      <input
        type="text"
        className="form-control new-post-label"
        placeholder="What r u thinking about"
      />
      <button type="submit" className="btn-outline-secondary">
        Add Post
      </button>
    </form>
  );
};

export default PostAddForm;

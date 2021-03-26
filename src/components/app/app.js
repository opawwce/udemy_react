import React, { Component } from "react";
import AppHeader from "../appHeader";
import PostAddForm from "../postAddForm";
import PostList from "../postList";
import PostStatusFilter from "../postStatusFilter";
import SearchPanel from "../searchPanel";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <h1>
        <AppHeader />
      </h1>
      <div className="search-panel d-flex">
        <SearchPanel />
      </div>
      <div className="post-status-filter">
        <PostStatusFilter />
      </div>
      <div>
        <PostList />
      </div>
      <div>
        <PostAddForm />
      </div>
    </div>
  );
};
export default App;

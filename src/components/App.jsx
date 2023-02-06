import React from "react";
import Header from "./Header";
import PostList from "./PostList";
import UserInfo from "./UserInfo";
import FriendList from "./FriendList";
import UserAbout from "./UserAbout";

function App(){
  return (
    <div className="app">
      <Header />
      <div className="main-page">
        <div className="main-column">
          <UserInfo/>
          <UserAbout/>
        </div>
        <div className="main-column">
          <PostList/>
        </div>
        <div className="main-column">
          <FriendList/>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

function Header(){
  return (
    <div className="header">
      <div className="link-bar">
        <a href="">Home</a>
        <a href="">Notifications</a>
        <a href="">Messages</a>
      </div>
      <form className="search">
        <input className="search-input" type="text" id="search" placeholder="search"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
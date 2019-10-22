import React from "react";
import "./NavBar.css"

const NavBar = props => {
  return (
      <div className="page-header">
        <div className="title">Clicky Game!</div>
        <div className="score">
          Score: {props.score} High Score: {props.highScore}
        </div>
      </div>
  );
}

export default NavBar;

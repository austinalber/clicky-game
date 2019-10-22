import React from "react";
import "./NavBar.css"

// Styling
// const phantomStyle = {
//   display: "block",
//   padding: "20px",
//   height: "60px",
//   width: "100%"
// };
// const headerStyle = {
//   backgroundColor: "#2A77AE",
//   fontSize: "15px",
//   textColor: "black",
//   textAlign: "center",
//   padding: "5px",
//   position: "fixed",
//   left: "0",
//   bottom: "0",
//   height: "30px",
//   width: "100%"
// };
// const backgroundStyle = {
//   backgroundColor: "#2A77AE",
//   width: "100%",
//   fontSize: "2rem",
//   color: "#2A77AE",
//   bottom: "-15px"
// }

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

// const NavBar = props => {
//   return (
//     <div>
//       <div style={headerStyle} className="page-header">
//         <div className="title">Clicky Game!</div>
//         <div className="score">
//           Score: {props.score} High Score: {props.highScore}
//         </div>
//       </div>
//       <div style={phantomStyle}></div>
//     </div>
//   );
// }

export default NavBar;
